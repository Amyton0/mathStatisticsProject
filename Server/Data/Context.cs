using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace MathStatisticsProject.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Homework> Homeworks { get; set; }
        public DbSet<Attendance> Attendances { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>()
                .HasMany(s => s.Homeworks)
                .WithOne(h => h.Student)
                .HasForeignKey(h => h.StudentId);

            modelBuilder.Entity<Student>()
                .HasMany(s => s.Attendances)
                .WithOne(a => a.Student)
                .HasForeignKey(a => a.StudentId);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder()
                                .SetBasePath(Directory.GetCurrentDirectory())
                                .AddJsonFile("appsettings.Secret.json");

            var configuration = builder.Build();
            var connectionString = configuration.GetConnectionString("PostgreSQL");

            optionsBuilder.UseNpgsql(connectionString);
        }
    }
    public class DbContextImplFactory : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<Context>();
            optionsBuilder.UseNpgsql("your_connection_string_here");

            return new Context(optionsBuilder.Options);
        }
    }
}
