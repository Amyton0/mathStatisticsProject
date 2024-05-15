using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Type = MathStatisticsProject.Models.Type;

namespace MathStatisticsProject.Repositories;

public class LessonRepository
{
    private readonly Context db;
    
    public LessonRepository(Context db)
    {
        this.db = db;
    }

    public async Task<bool> AddScoresForLesson(Dictionary<Guid, double> scores)
    {
        await db.Lessons
            .Where(l => scores.ContainsKey(l.Id))
            .ForEachAsync(l => l.Scores = scores[l.Id]);
        return await db.SaveChangesAsync() >= 0;
    }

    


    public void Dispose()
    {
        Dispose(true);
        GC.SuppressFinalize(this);
    }

    private void Dispose(bool disposing)
    {
        if (disposing)
        {
            if (db != null)
            {
                db.Dispose();
            }
        }
    }
}