using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using MathStatisticsProject.GetModels;
using Microsoft.AspNetCore.Mvc;
using System;
using MathStatisticsProject.Repositories;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScoresController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public ScoresController(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        
        [HttpPost("{id}")]
        public async Task<ActionResult<PostScore>> PostScore(Guid id, [FromBody]List<PostScore> postScores)
        {
            var listScores = new List<Score>();
            foreach (var postScore in postScores)
            {
                var score = new Score
                {
                    StudentId = postScore.StudentId,
                    LessonId = id,
                    Value = postScore.Value
                };
                listScores.Add(score);
            }

            var lessonRepository = new LessonRepository(_context);
            await lessonRepository.AddScoresForLesson(listScores);
            return CreatedAtAction(nameof(PostScore), new { id = id, postScores = postScores }, postScores);
        }
    }
}
