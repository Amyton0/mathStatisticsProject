﻿
namespace MathStatisticsProject.PostModels
{
    public class PostAttendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public Guid[] StudentIds { get; set; }
        public PostStudent Student { get; set; }
        public AttendanceStatus AttendanceStatus { get; set; }
    }
    public enum AttendanceStatus
    {
        Absent,
        Present,
        AbsentForRespectfulReason
    }
}
