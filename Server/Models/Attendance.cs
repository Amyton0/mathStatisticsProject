namespace MathStatisticsProject.Models

{
    public class Attendance
    {
        public Guid LessonId { get; set; }
        public Guid StudentId { get; set; }
        public Guid Id { get; set; }
        public AttendanceStatus AttendanceStatus { get; set; }
        public Student Student { get; set; }
        public Lesson Lesson { get; set; }
    }

    public enum AttendanceStatus
    {
        Absent,
        Present,
        AbsentForRespectfulReason
    }
}
