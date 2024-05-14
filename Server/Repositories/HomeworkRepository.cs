using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace MathStatisticsProject.Repositories
{
    public class HomeworkRepository
    {
        private readonly Context db;

        public HomeworkRepository(Context db)
        {
            this.db = db;
        }

        public async Task<List<Homework>> GetAllHomeworksAsync()
        {
            return await db.Homeworks.OrderBy(h => h.Id).ToListAsync();
        }

        public async Task<Homework> GetHomeworkByIdAsync(Guid id)
        {
            return await db.Homeworks.FirstOrDefaultAsync(h => h.Id == id);
        }

        public  bool SendHomeWork(Homework homework)
        {
            using var context = new Context();
            context.Homeworks.Add(homework);
            return  db.SaveChanges() >= 0;
        }
        
        public IEnumerable<Homework> TakeFilteredHomeworks(Filter filter, List<Homework> homeworks)
        {
            return homeworks.Where(hm => FiltrationHomeworks(filter, hm));
        }

        public bool FiltrationHomeworks(Filter filter, Homework homework)
        {
            
            if (filter.HomeworkIndexes != null && homework.Number != filter.HomeworkIndexes)
            {
                return false;
            }
            
            if (filter.Groups != null && filter.Groups.Any() && !filter.Groups.Contains(TakeGroupHomework(homework)))
            {
                return false;
            }

            if (filter.statusHomeworks != null && filter.statusHomeworks.Any() && !filter.statusHomeworks.Contains((Status)homework.Status))
            {
                return false;
            }
            
            return true;
        }

        private string? TakeGroupHomework(Homework homework)
        {
            var groupHomework = db.Homeworks
                .Where(x => x.Id == homework.Id)
                .Join(db.Students,
                    homework => homework.StudentId,
                    student => student.Id,
                    (homework, student) => student.Group)
                .FirstOrDefault();
            return groupHomework;
        }
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (db != null)
                {
                    db.Dispose();
                }
            }
        }
    }
}

/*public async Task<bool> AddHomeworkAsync(Homework work)
        {
            var homework = new Homework
            {
                Id = work.Id,
                Type = work.Type,
                Number = work.Number,
                SendTime = work.SendTime,
                Status = work.Status,
                StudentId = work.StudentId,
                Message = work.Message
            };

            await db.Homeworks.AddAsync(homework);
            return await db.SaveChangesAsync() >= 0;
        }*/