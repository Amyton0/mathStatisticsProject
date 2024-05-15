using System.ComponentModel.DataAnnotations.Schema;

namespace MathStatisticsProject.Models
{
    public class Homework
    {
        public Guid Id { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public byte[] Content { get; set; }
        public string Message { get; set; }
        public Status Status { get; set; }
        public Type Type { get; set; }
        public double Points { get; set; }
        public Guid LessonId { get; set; }
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
