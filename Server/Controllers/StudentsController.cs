using System;
using System.Threading.Tasks;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<ActionResult<GetStudent>> GetStudent(int id)
    {
        throw new NotImplementedException();
    }

    //CR: нам это не надо пока. Можно оставить, только не забудь, что не надо реализовывать
    [HttpPost]
    public async Task<ActionResult<PostStudent>> PostStudent([FromBody] PostStudent student)
    {
        throw new NotImplementedException();
    }
}
