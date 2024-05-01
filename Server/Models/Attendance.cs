namespace MathStatisticsProject.Models
{
    public class Attendance
    {
        public int LessonNumber { get; set; }
        public string? Date { get; set; }
        public int[]? StudentIds { get; set; }
    }
}
