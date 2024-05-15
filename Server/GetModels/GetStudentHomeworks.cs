using MathStatisticsProject.Models;

namespace MathStatisticsProject.GetModels
{
    public class GetStudentHomeworks : GetHomework
    {
        public Guid Id { get; set; }
        public Models.Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public Guid StudentId { get; set; }
        public string Message { get; set; }
        public GetStudent Student { get; set; }
        public string Content { get; set; }
        public double Points { get; set; }
        public Guid LessonId { get; set; }
    }
}
