using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        // CR: гугли FromQuery
        [HttpGet("?studentGroup={studentGroup}")]
        public IActionResult GetTable(int studentGroup)
        {
            throw new NotImplementedException();
        }
    }
}
