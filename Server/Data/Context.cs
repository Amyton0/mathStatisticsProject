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
            modelBuilder.Entity<Score>().HasKey(score => new {score.LessonId, score.StudentId});
            modelBuilder.Entity<Attendance>().HasKey(attendance => new {attendance.LessonId, attendance.StudentId});
            
            var firstLessonDate = new DateTime(2024, 02, 05).ToUniversalTime();
            var lessons = new[]
            {
                new Lesson
                {
                    Id = Guid.NewGuid(),
                    Number = 1,
                    Date = firstLessonDate,
                },
                new Lesson
                {
                    Id = Guid.NewGuid(),
                    Number = 2,
                    Date = firstLessonDate.AddDays(7),
                },
                new Lesson
                {
                    Id = Guid.NewGuid(),
                    Number = 3,
                    Date = firstLessonDate.AddDays(14),
                },
                new Lesson
                {
                    Id = Guid.NewGuid(),
                    Number = 4,
                    Date = firstLessonDate.AddDays(21),
                }
            };
            modelBuilder.Entity<Lesson>().HasData(lessons);

            modelBuilder.Entity<Teacher>().HasData(
                new Teacher
                {
                    FirstName = "Прокофьев",
                    SecondName = "Сергей",
                    ThirdName = "Павлович",
                    Id = new Guid("2de4dd70-aeaa-4dee-807e-f7f8532756b8")
                });

            var students = new[]
            {
                new Student
                {
                    FirstName = "Вася",
                    SecondName = "Пупкин",
                    ThirdName = "1",
                    Group = "204",
                    Id = new Guid("6de4dd70-aeaa-4dee-807e-f7f8532756b8"),
                },
                new Student
                {
                    FirstName = "Вася",
                    SecondName = "Пупкин",
                    ThirdName = "2",
                    Group = "204",
                    Id = new Guid("18b38dd3-5095-4aba-95b8-67d65930a204"),
                },
                new Student
                {
                    FirstName = "Сильвестер",
                    SecondName = "Сталоне",
                    ThirdName = "Машина",
                    Group = "201",
                    Id = new Guid("8d841c70-3990-40a3-b895-c13de27298f5"),
                },
                new Student
                {
                    FirstName = "Джейсон",
                    SecondName = "Цитатный",
                    ThirdName = "Мастер",
                    Group = "202",
                    Id = new Guid("3c0bc991-50c4-44d2-a82a-df5124ebf115"),
                }
            };
            modelBuilder.Entity<Student>().HasData(students);

            var homeworks = new[]
            {
                new Homework
                {
                    Id = Guid.NewGuid(),
                    Number = 1,
                    Send = DateTime.Now.ToUniversalTime(),
                    StudentId = students[0].Id,
                    Content = "aaaa",
                    Message = "ya legnda",
                    Status = Status.Sended,
                    Complexity = Complexity.Grob,
                    Points = 0.6,
                    LessonId = lessons[0].Id
                },
                new Homework
                {
                    Id = Guid.NewGuid(),
                    Number = 1,
                    Send = DateTime.Now.ToUniversalTime(),
                    StudentId = students[1].Id,
                    Content = "aaaa",
                    Message = "ya legnda",
                    Status = Status.Checked,
                    Complexity = Complexity.DZ,
                    Points = 0.6,
                    LessonId = lessons[0].Id
                },
                new Homework
                {
                    Id = Guid.NewGuid(),
                    Number = 2,
                    Send = DateTime.Now.ToUniversalTime(),
                    StudentId = students[0].Id,
                    Content = "aaaa",
                    Message = "ya legnda",
                    Status = Status.Checked,
                    Complexity = Complexity.DZ,
                    Points = 0.6,
                    LessonId = lessons[1].Id
                },
                new Homework
                {
                    Id = Guid.NewGuid(),
                    Number = 3,
                    Send = DateTime.Now.ToUniversalTime(),
                    StudentId = students[2].Id,
                    Content = "aaaa",
                    Message = "ya legnda",
                    Status = Status.Sended,
                    Complexity = Complexity.DZ,
                    Points = 5,
                    LessonId = lessons[2].Id
                }
            };
            modelBuilder.Entity<Homework>().HasData(homeworks);

            var scores = new[]
            {
                new Score
                {
                    LessonId = lessons[0].Id,
                    StudentId = students[0].Id,
                    Value = 2
                },
                new Score
                {
                    LessonId = lessons[1].Id,
                    StudentId = students[0].Id,
                    Value = 2
                },
                new Score
                {
                    LessonId = lessons[3].Id,
                    StudentId = students[2].Id,
                    Value = 0.5
                }
            };
            modelBuilder.Entity<Score>().HasData(scores);
            
            var attendances = new[]
            {
                new Attendance
                {
                    LessonId = lessons[0].Id,
                    StudentId = students[0].Id,
                    AttendanceStatus = AttendanceStatus.Present
                },
                new Attendance
                {
                    LessonId = lessons[0].Id,
                    StudentId = students[3].Id,
                    AttendanceStatus = AttendanceStatus.Present
                },
                new Attendance
                {
                    LessonId = lessons[2].Id,
                    StudentId = students[1].Id,
                    AttendanceStatus = AttendanceStatus.Present
                },
                new Attendance
                {
                    LessonId = lessons[3].Id,
                    StudentId = students[0].Id,
                    AttendanceStatus = AttendanceStatus.Present
                }
            };
            modelBuilder.Entity<Attendance>().HasData(attendances);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Host=localhost;Username=postgres;Password=postgres;Database=postgres;Port=5432";
            optionsBuilder.UseNpgsql(connectionString);
        }
    }
}
