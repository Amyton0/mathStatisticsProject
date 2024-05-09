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

        public async Task<bool> SendHomeWork(Homework homework)
        {
            await using var context = new Context();
            context.Homeworks.Add(homework);
            return await db.SaveChangesAsync() >= 0;
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
            
            foreach (var studentHomeworks in JoinStudentHomeworksWithFilter())
            {
                foreach (var filterGroup in filter.Groups)
                {
                    if (filterGroup != null && filterGroup != studentHomeworks.student.Group)
                    {
                        return false;
                    }
                }
            }

            foreach (var filterStatus in filter.statusHomeworks)
            {
                if (filterStatus != null && filterStatus != homework.Status)
                {
                    return false;
                }
            }

            return true;
        }

        private List<dynamic> JoinStudentHomeworksWithFilter()
        {
            var filteredStudents = db.Students
                .Join(db.Homeworks,
                    student => student.Id,
                    homework => homework.StudentId,
                    (student, homework) => new { student, homework })
                .ToList();
            return new List<dynamic> { filteredStudents };
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
