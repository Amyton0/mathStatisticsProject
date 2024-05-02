using System;
using System.Threading.Tasks;
using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> GetStudent(int id)
    {
        throw new NotImplementedException();
    }

    //CR: нам это не надо пока. Можно оставить, только не забудь, что не надо реализовывать
    [HttpPost]
    public async Task<ActionResult<Student>> PostStudent([FromBody] Student student)
    {
        throw new NotImplementedException();
    }
}
