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
        [HttpPost]
        public IActionResult PostScore([FromBody] PostScore score)
        {
            // Логика обработки запроса POST на /api/score
            throw new NotImplementedException();
        }
    }
}
