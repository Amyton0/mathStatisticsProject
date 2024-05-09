using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace MathStatisticsProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AttendancesController : ControllerBase
    {
        private readonly Context _context;
        private readonly IMapper _mapper;

        public AttendancesController(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        [HttpGet("{studentId}")]
        //CR: чью посещаемость тут пытаемся получить? пысы получим посещаемость рандомного студента на паре
        public async Task<ActionResult<GetAttendance>> GetAttendance(int studentId)
        {
            var attendance = await _context.Attendances.FirstOrDefaultAsync(a => a.StudentId == studentId);

            if (attendance == null)
            {
                return NotFound();
            }

            var getAttendance = _mapper.Map<GetAttendance>(attendance);

            return getAttendance;
        }

        [HttpPost]
        //CR: препод потыкает галочки у посетивших пару студентов. Проще и эффективнее отправить список студентов 
        //Это снизит загрузку на сервер(1 запрос против 20-30-100). А размер списка не настолько велик(<100),
        //поэтому один запрос не будет достаточно тяжелым. Про злоумышленников не надо думать
        public async Task<ActionResult<PostStudent>> PostAttendance([FromBody] PostStudent[] students)
        {
            var studentEntities = _mapper.Map<Student[]>(students);
            var attendanceList = studentEntities.Select(s => new Attendance
            {
                StudentId = s.Id,
                Date = DateTime.Now,
            });

            _context.Attendances.AddRange(attendanceList);
            await _context.SaveChangesAsync();

            return Ok(students);
        }
    }
}
