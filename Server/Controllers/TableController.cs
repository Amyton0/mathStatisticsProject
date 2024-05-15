using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        private readonly Context _context;

        public TableController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetTable([FromQuery] DateTime leftDate, [FromQuery] DateTime rightDate)
        {
            var lessons = _context.Lessons.Where(x => x.Date >= leftDate.ToUniversalTime() && x.Date <= rightDate.ToUniversalTime()).ToList();
            var lessonIds = lessons.Select(x => x.Id).ToList();

            var attendances = _context.Attendances.Where(x => lessonIds.Contains(x.LessonId)).ToList();
            var homeworks = _context.Homeworks.Where(x => lessonIds.Contains(x.LessonId)).ToList();
            var scores = _context.Scores.Where(x => lessonIds.Contains(x.LessonId)).ToList();

            var result = new List<object>();

            foreach (var lesson in lessons)
            {
                var lessonData = new
                {
                    lesson = new
                    {
                        id = lesson.Id,
                        date = lesson.Date,
                        number = lesson.Number
                    },
                    attendances = attendances.Where(x => x.LessonId == lesson.Id)
                                            .Select(x => new
                                            {
                                                studentId = x.StudentId,
                                                attendanceStatus = x.AttendanceStatus.ToString()
                                            }).ToList(),
                    homeworks = homeworks.Where(x => x.LessonId == lesson.Id)
                                        .Select(x => new
                                        {
                                            studentId = x.StudentId,
                                            points = x.Points
                                        }).ToList(),
                    scores = scores.Where(x => x.LessonId == lesson.Id)
                                    .Select(x => new
                                    {
                                        studentId = x.StudentId,
                                        value = x.Value
                                    }).ToList()
                };

                result.Add(lessonData);
            }

            return Ok(result);
        }
    }
}
