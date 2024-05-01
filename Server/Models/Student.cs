namespace MathStatisticsProject.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Group { get; set; }
        public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
    }
}
