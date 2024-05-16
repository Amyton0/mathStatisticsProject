namespace MathStatisticsProject.Models
{
    public class Score
    {
        public Guid LessonId { get; set; }
        public Guid StudentId { get; set; }
        public double Value { get; set; }
        public Student Student { get; set; }
    }
}
