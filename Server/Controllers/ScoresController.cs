using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
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

        [HttpPost]
        public async Task<IActionResult> PostScore([FromBody] PostScore score)
        {
            throw new NotImplementedException();
        }
    }
}
