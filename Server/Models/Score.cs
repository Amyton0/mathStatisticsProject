namespace MathStatisticsProject.Models
{
    public class Score
    {
        public Student Student { get; set; }
        public Guid StudentId { get; set; }
        public Guid LessonId { get; set; }
        public double Value { get; set; } 
    }
}
