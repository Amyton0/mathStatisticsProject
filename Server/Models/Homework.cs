using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MathStatisticsProject.Models
{
    [Table("homeWorks")]
    public class Homework
    {
        [Column]
        public Type Type { get; set; }
        public int Number { get; set; }
        public DateTime SendTime { get; set; }
        public Status Status { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
        public Message Message { get; set; }
        
        [Key]
        public int Id { get; set; }
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
