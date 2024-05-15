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
            modelBuilder.Entity<Attendance>().HasData(
                new Attendance()
                {
                    Id = Guid.NewGuid(),
                    LessonId = new Guid("1de4dd70-aeaa-4dee-807e-f7f8532755b8"),
                    Date = DateTime.Now.ToUniversalTime(),
                    LessonNumber = 2,
                    AttendanceStatus = AttendanceStatus.Absent,
                    StudentId = new Guid("5de4dd70-aeaa-4dee-807e-f7f8532756b8"),
                }
            ) ;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Host=localhost;Username=postgres;Password=postgres;Database=postgres;Port=5432";
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
