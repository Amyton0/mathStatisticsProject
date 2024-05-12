namespace MathStatisticsProject.PostModels
{
    public class PostScore
    {
        public Guid StudentId { get; set; }
        public int LessonId { get; set; }
        public double Value { get; set; }
    }
}
