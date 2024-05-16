using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using MathStatisticsProject.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Net.WebSockets;
using System.Threading.Tasks;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendancesController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;
        private readonly AttendanceRepository _attendanceRepository;

        public AttendancesController(Context context, IMapper mapper, AttendanceRepository attendanceRepository)
        {
            _context = context;
            _mapper = mapper;
            _attendanceRepository = attendanceRepository;
        }
        //[HttpGet]
        //public async Task<ActionResult<GetAttendance>> GetAttendance([FromQuery] int lessonNumber, [FromQuery] Guid studentId)
        //{
        //    var attendance = await _attendanceRepository.GetAttendanceByIdAsync(lessonNumber, studentId);
        //    var getAttendance = _mapper.Map<GetAttendance>(attendance);
        //    return Ok(getAttendance);
        //} //ok

        [HttpPost("{lessonId}")]
        public async Task<ActionResult<PostStudent>> PostAttendance([FromBody] Guid[] studentIds, Guid lessonId)
        {
            //var studentEntities = _mapper.Map<Student[]>(students);
            //var attendanceList = studentEntities.Select(s => new Attendance
            //{
            //    StudentId = s.Id,
            //    Date = DateTime.Now,
            //});

            //_context.Attendances.AddRange(attendanceList);
            //await _context.SaveChangesAsync();

            //return Ok(students);
            bool result = await _attendanceRepository.ChangeAttendancesAsync(studentIds, lessonId);

            if (result)
            {
                return Ok("Attendances changed successfully.");
            }
            else
            {
                return BadRequest("Failed to change attendances.");
            }
        }//не ok
    }
}
