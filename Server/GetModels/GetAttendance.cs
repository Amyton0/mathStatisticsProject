using MathStatisticsProject.Models;

namespace MathStatisticsProject.GetModels
{
    public class GetAttendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public Guid StudentId { get; set; }
        public Guid Id { get; set; }
        public AttendanceStatus AttendanceStatus { get; set; }
    }
}
