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
            throw new NotImplementedException();
        }
    }
}
