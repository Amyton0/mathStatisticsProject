namespace MathStatisticsProject.Models
{
    public class Homework
    {
        public int Id { get; set; }
        public string? Type { get; set; }
        public int Number { get; set; }
        public string? Send { get; set; }
        public string? Status { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
        public Message Message { get; set; }
    }
}
