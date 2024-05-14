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
        public IActionResult GetTable([FromQuery] int studentGroup)
        {
            var students = _context.Students.Where(s => s.Group == studentGroup.ToString()).ToList();
            return Ok(students);
        }//хз
    }
}
