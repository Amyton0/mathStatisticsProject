namespace MathStatisticsProject.Models

{
    public class Attendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
    }
}
