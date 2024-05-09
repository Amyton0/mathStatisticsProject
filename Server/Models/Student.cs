using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MathStatisticsProject.Models
{
    [Table("students")]
    public class Student
    {
        [Column]
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string ThirdName { get; set; }
        public string Group { get; set; }
        /*public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Attendance> Attendances { get; set; }*/
        [Key]
        public Guid Id { get; set; }
        
    }
}
