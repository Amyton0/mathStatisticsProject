using System;
using System.Threading.Tasks;
using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeworksController : ControllerBase
{
    [HttpGet("{id}")]
    // CR: student == homework?
    public async Task<ActionResult<Student>> GetHomework(int id)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    // CR: student == homework? Еще можно возвращать просто айдишник вместо целого json'а
    // Но это нужно подумать, какие поля в передаваемой и возвращаемой модели могут отличаться
    public async Task<ActionResult<Student>> PostHomework([FromBody] Homework homework)
    {
        throw new NotImplementedException();
    }
}
