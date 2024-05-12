using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using MathStatisticsProject.GetModels;
using Microsoft.AspNetCore.Mvc;
using System;

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

        [HttpGet("{id}")]
        public async Task<ActionResult<GetScore>> GetScore(Guid id)
        {
            var scoreEntity = _context.Students.Where(s => s.Id == id);

            if (scoreEntity == null)
            {
                return NotFound();
            }

            var getScoreModel = _mapper.Map<GetScore>(scoreEntity);

            return getScoreModel;
        }
    }
}
