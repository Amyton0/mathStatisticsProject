using MathStatisticsProject.Models;
using Type = System.Type;

namespace MathStatisticsProject.Repositories;

public class Filter
{
    public string?[] Groups { get; set; }
    public int? HomeworkIndexes { get; set; }
    public Type?[] typeHomeworks { get; set; }
    public Status?[] statusHomeworks { get; set; }
}

