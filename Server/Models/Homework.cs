using System.ComponentModel.DataAnnotations.Schema;

namespace MathStatisticsProject.Models
{
    [Table("Homeworks")]
    public class Homework
    {
        public Guid Id { get; set; }
        public Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public string Message { get; set; }
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
