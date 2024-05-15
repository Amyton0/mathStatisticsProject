using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using MathStatisticsProject.Controllers;
using Type = MathStatisticsProject.Models;

namespace MathStatisticsProject.Repositories;

public class LessonRepository
{
    private readonly Context db;
    
    public LessonRepository(Context db)
    {
        this.db = db;
    }

    public async Task<bool> AddScoresForLesson(List<Score> scores)
    {
        foreach (var score in scores)
        {
            await db.Scores
                .Where(s => s.StudentId == score.StudentId)
                .ForEachAsync(s => s.Value = score.Value);
        }
        return await db.SaveChangesAsync() >= 0;
    }

    public async Task<List<Score>> TakeScoresForLesson(List<Guid> lessonsId,FilterForTable filterForTable)
    {
        var filteredGroups = await TakeGroupsForFilteredScores(lessonsId);

        var filteredLessons = await db.Scores
            .Where(l => FilteredTables(filteredGroups, filterForTable))
            .ToListAsync();
        return filteredLessons;
    }

    public async Task<List<string>> TakeGroupsForFilteredScores(List<Guid> lessonsId)
    {
        var joinScoresAndStudent = await db.Scores
            .Where(s => lessonsId.Contains(s.LessonId))
            .Join(db.Students,
                score => score.StudentId,
                student => student.Id,
                (score, student) => student.Group).ToListAsync();
        return joinScoresAndStudent;
    }

    public bool FilteredTables(List<string> groups, FilterForTable filterForTable)
    {
        if (filterForTable.Groups.Any() && groups.All(g => !filterForTable.Groups.Contains(g)))
        {
            return false;
        }

        return true;
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