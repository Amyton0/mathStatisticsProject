namespace MathStatisticsProject.Models
{
    public class Homework
    {
        public int Id { get; set; }
        public Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
        public Message Message { get; set; }
        public string Content { get; set; }
    }

    public enum Type
    {
        DZ,
        Grob
    }

    public enum Status
    {
        Checked,
        Sended,
        Doreshka
    }
}
