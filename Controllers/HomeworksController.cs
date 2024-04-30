using MathStatisticsProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeworksController : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<ActionResult<Student>> GetHomework(int id)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<ActionResult<Student>> PostHomework([FromBody] Homework homework)
    {
        throw new NotImplementedException();
    }
}
