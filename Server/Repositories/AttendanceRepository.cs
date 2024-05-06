using Microsoft.EntityFrameworkCore;
using MathStatisticsProject.Models;
using MathStatisticsProject.Data;

namespace MathStatisticsProject.Repositories
{
    public sealed class AttendanceRepository : IDisposable
    {
        private readonly Context db;

        public AttendanceRepository(Context db)
        {
            this.db = db;
        }

        public async Task<Attendance> GetAttendanceByIdAsync(int lessonNumber, int studentId)
        {
            return await db.Attendances.FirstOrDefaultAsync(a => a.LessonNumber == lessonNumber && a.StudentId == studentId);
        }

        public async Task<bool> AddAttendanceAsync(int lessonNumber, DateTime date, int studentId)
        {
            var attendance = new Attendance
            {
                LessonNumber = lessonNumber,
                Date = date,
                StudentId = studentId
            };

            await db.Attendances.AddAsync(attendance);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> DeleteAttendanceAsync(int studentId, int lessonNumber)
        {
            var attendance = new Attendance { StudentId = studentId, LessonNumber = lessonNumber };
            db.Attendances.Attach(attendance);
            db.Attendances.Remove(attendance);
            return await db.SaveChangesAsync() >= 0;
        }

        //CR: хочу обоснование dispose. При гуглении обращай внимание на версию EF
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
