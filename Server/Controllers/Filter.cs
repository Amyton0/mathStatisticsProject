using MathStatisticsProject.Models;
using Type = System.Type;

namespace MathStatisticsProject.Repositories;

public class Filter
{
    public List<string>? Groups { get; set; }
    public int? HomeworkIndexes { get; set; }
    public List<Complexity>? typeHomeworks { get; set; }
    public List<Status>? statusHomeworks { get; set; }
}

