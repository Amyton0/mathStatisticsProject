using System.ComponentModel.DataAnnotations.Schema;
namespace MathStatisticsProject.Models;

public class Lesson
{
    public Guid Id { get; set; }
    public int Number { get; set; }
    public Guid StudentId { get; set; }
    public double Scores { get; set; }
}