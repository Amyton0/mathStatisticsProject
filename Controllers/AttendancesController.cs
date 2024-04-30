using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendancesController : ControllerBase
    {
        [HttpGet("{lessonNumber}")]
        public async Task<ActionResult<Attendance>> GetAttendance(int lessonNumber)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult<Attendance>> PostAttendance([FromBody] Attendance attendance)
        {
            throw new NotImplementedException();
        }
    }
}
