namespace MathStatisticsProject.Models

{
    public class Attendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public Guid StudentId { get; set; }
        public Guid Id { get; set; }
        public AttendanceStatus AttendanceStatus { get; set; }
        public Student Student { get; set; }
        public Guid LessonId { get; set; }
    }

    public enum AttendanceStatus
    {
        Absent,
        Present,
        AbsentForRespectfulReason
    }
}
