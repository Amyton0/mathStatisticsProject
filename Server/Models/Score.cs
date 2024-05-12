namespace MathStatisticsProject.Models
{
    public class Score
    {
        public Guid StudentId { get; set; }
        public int LessonId { get; set; }
        public double Value { get; set; }
    }
}
