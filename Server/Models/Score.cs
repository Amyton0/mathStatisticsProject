namespace MathStatisticsProject.Models
{
    public class Score
    {
        public int StudentId { get; set; }
        public int LessonId { get; set; }
        //CR: а не целые оценки не бывают?
        public int Value { get; set; }
    }
}
