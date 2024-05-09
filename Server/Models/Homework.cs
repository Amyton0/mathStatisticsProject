using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MathStatisticsProject.Models
{
    [Table("homeWorks")]
    public class Homework
    {
        public Student Student { get; set; }
        public Message Message { get; set; }
        
        [Column]
        public Type Type { get; set; }
        public int Number { get; set; }
        public DateTime SendTime { get; set; }
        public Status Status { get; set; }
        public Guid StudentId { get; set; }

        public string WriteMessage
        {
            get => WriteMessage;
            set => Message.WriteMessage = value;
        }

        public byte[] Content
        {
            get => Content;
            set => Message.Content = value;
        }

        [Key]
        public Guid Id { get; set; }
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
