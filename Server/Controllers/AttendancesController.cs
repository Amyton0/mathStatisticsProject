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
        //CR: чью посещаемость тут пытаемся получить? пысы получим посещаемость рандомного студента на паре
        public async Task<ActionResult<Attendance>> GetAttendance(int lessonNumber)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        //CR: препод потыкает галочки у посетивших пару студентов. Проще и эффективнее отправить список студентов 
        //Это снизит загрузку на сервер(1 запрос против 20-30-100). А размер списка не настолько велик(<100),
        //поэтому один запрос не будет достаточно тяжелым. Про злоумышленников не надо думать
        public async Task<ActionResult<Attendance>> PostAttendance([FromBody] Attendance attendance)
        {
            throw new NotImplementedException();
        }
    }
}
