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

        public async Task<bool> SendHomeWork(Homework homework)
        {
            await db.Homeworks.AddAsync(homework);
            return  await db.SaveChangesAsync() >= 0;
        }
        
        public IEnumerable<Homework> TakeFilteredHomeworks(Filter filter, List<Homework> homeworks)
        {

            return homeworks.Where(hm => FiltrationHomeworks(filter, hm));

        }

        private bool FiltrationHomeworks(Filter filter, Homework homework)
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

        public async Task<bool> ChangePointsForHomework(Guid idHomework, double points)
        {
            await db.Homeworks
                .Where(hm => hm.Id == idHomework)
                .ForEachAsync(hm => hm.Points = points);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> ChangeStatusForHomework(Guid idHomework, Status newStatus)
        {
            await db.Homeworks
                .Where(hm => hm.Id == idHomework)
                .ForEachAsync(hm => hm.Status = newStatus);
            return await db.SaveChangesAsync() >= 0;
        }
        

        /*private List<Student> GetStudentsByHomeworkId(Guid homeworkId)
        {
            // Получаем список студентов, связанных с заданным идентификатором домашнего задания
            return db.Homeworks
                .Where(h => h.Id == homeworkId)
                .Join(db.Students,
                    h => h.StudentId,
                    s => s.Id,
                    (h, s) => new Student
                    {
                        Id = s.Id,
                        FirstName = s.FirstName,
                        SecondName = s.SecondName,
                        ThirdName = s.ThirdName,
                        Group = s.Group
                    })
                .ToList();
        }*/
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
/*public async Task<List<Homework>> GetAllHomeworksAsync()
{
    return await db.Homeworks.OrderBy(h => h.Id).ToListAsync();
}

public async Task<Homework> GetHomeworkByIdAsync(Guid id)
{
    return await db.Homeworks.FirstOrDefaultAsync(h => h.Id == id);
}
*/