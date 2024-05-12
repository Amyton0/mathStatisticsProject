using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTable([FromQuery] int studentGroup)
        {
            // Ваша логика обработки запроса здесь
            // Можете возвращать какие-то данные или результат

            return Ok($"Вы запросили данные для группы студентов: {studentGroup}");
        }
    }
}
