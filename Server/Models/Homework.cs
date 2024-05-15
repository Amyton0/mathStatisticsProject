using Google.Apis.Util;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace MathStatisticsProject.Models
{
    [Table("Homeworks")]
    public class Homework
    {
        public Guid Id { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Guid StudentId { get; set; }
        public Student Student { get; set; }
        public string Content { get; set; }
        public string Message { get; set; }
        public Status Status { get; set; }
        public Complexity Complexity { get; set; }
        public double Points { get; set; }
        public Guid LessonId { get; set; }
    }

    public enum Complexity
    {
        [StringValue("DZ")]
        DZ,
        [StringValue("Grob")]
        Grob
    }

    public enum Status
    {
        [StringValue("Sended")]
        Sended,
        [StringValue("Doreshka")]
        Doreshka,
        [StringValue("Checked")]
        Checked,
    }
}
