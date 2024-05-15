using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MathStatisticsProject.Models
{
    public class Student
    {
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public string ThirdName { get; set; }
        public string Group { get; set; }
        
        public Guid Id { get; set; }
        
    }
}
