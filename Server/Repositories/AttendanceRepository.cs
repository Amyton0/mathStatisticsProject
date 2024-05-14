using Microsoft.EntityFrameworkCore;
using MathStatisticsProject.Models;
using MathStatisticsProject.Data;

namespace MathStatisticsProject.Repositories
{
    public sealed class AttendanceRepository
    {
        private readonly Context db;

        public AttendanceRepository(Context db)
        {
            this.db = db;
        }

        public async Task<List<Attendance>> GetAllAttendance()
        {
            return await db.Attendances.ToListAsync();
        }
            
        public async Task<Attendance?> GetAttendanceByIdAsync(int lessonNumber, Guid studentId)
        {
            return await db.Attendances.FirstOrDefaultAsync(a => a.LessonNumber == lessonNumber && a.StudentId == studentId);
        }

        public async Task<bool> AddAttendanceAsync(Attendance attendance)
        {
            await db.Attendances.AddAsync(attendance);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> DeleteAttendanceAsync(Guid studentId, int lessonNumber)
        {
            var attendance = new Attendance { StudentId = studentId, LessonNumber = lessonNumber };
            db.Attendances.Attach(attendance);
            db.Attendances.Remove(attendance);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> ChangeAttendancesAsync(Guid[] studentsId, int lessonNumber)
        {
            var attendances = db.Attendances
                .Where(a => studentsId.Contains(a.StudentId) && a.LessonNumber == lessonNumber);
            foreach (var attendance in attendances)
            {
                attendance.AttendanceStatus = AttendanceStatus.Present;
            }
            return await db.SaveChangesAsync() >= 0;
        }
        

        //CR: хочу обоснование dispose. При гуглении обращай внимание на версию EF
        //public void Dispose()
        //{
        //    Dispose(true);
        //    GC.SuppressFinalize(this);
        //}

        //private void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        if (db != null)
        //        {
        //            db.Dispose();
        //        }
        //    }
        //}
    }
}
