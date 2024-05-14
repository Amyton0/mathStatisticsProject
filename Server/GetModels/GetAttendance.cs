namespace MathStatisticsProject.GetModels
{
    public class GetAttendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public Guid[] StudentIds { get; set; }
        public GetStudent Student { get; set; }
        public AttendanceStatus AttendanceStatus { get; set; }
    }
    public enum AttendanceStatus
    {
        Absent,
        Present,
        AbsentForRespectfulReason
    }
}
