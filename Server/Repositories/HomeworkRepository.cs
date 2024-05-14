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

        public async Task<bool> SendHomeWork(Homework homework)
        {
            await db.Homeworks.AddAsync(homework);
            return  await db.SaveChangesAsync() >= 0;
        }
        
        public IEnumerable<Homework> TakeFilteredHomeworks(Filter filter, List<Homework> homeworks)
        {
            return homeworks.Where(hm => FiltrationHomeworks(filter, hm));
        }

        public bool FiltrationHomeworks(Filter filter, Homework homework)
        {
            
            if (homework.Number != filter.HomeworkIndexes && filter.HomeworkIndexes != null)
            {
                return false;
            }
            
            if (filter.Groups.Any() && !filter.Groups.Contains(TakeGroupHomework(homework)))
            {
                return false;
            }

            if (filter.statusHomeworks.Any() && !filter.statusHomeworks.Contains(homework.Status))
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