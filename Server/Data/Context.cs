using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace MathStatisticsProject.Data
{
    public class Context : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Homework> Homeworks { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<Score> Scores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Homework>().HasData(
                new Homework
                {
                    Id = Guid.NewGuid(),
                    Number = 1,
                    Send = DateTime.Now.ToUniversalTime(),
                    StudentId = new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"),
                    Content = "aaaa",
                    Message = "ya legnda",
                    Status = Status.Sended,
                    Complexity = Complexity.Grob,
                    Points = 0.6,
                    LessonId = new Guid("3de4dd70-aeaa-4dee-807e-f7f8532755b8")
                }
            );
            modelBuilder.Entity<Student>().HasData(
                new Student
                {
                    FirstName = "aboba",
                    SecondName = "aboba",
                    ThirdName = "aboba",
                    Group = "204",
                    Id = new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"),
                });
            modelBuilder.Entity<Student>().HasData(
                new Teacher
                {
                    FirstName = "a",
                    SecondName = "b",
                    ThirdName = "c",
                    Id = new Guid("2de4dd70-aeaa-4dee-807e-f7f8532756b8")
                });
            modelBuilder.Entity<Lesson>().HasData(
                new Lesson
                {
                    Id = new Guid("3de4dd70-aeaa-4dee-807e-f7f8532755b8"),
                    Number = 1,
                    Date = DateTime.Now.ToUniversalTime(),
                });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Host=localhost;Username=postgres;Password=postgres;Database=postgres;Port=5432";
            optionsBuilder.UseNpgsql(connectionString);
            
        }
    }
}
