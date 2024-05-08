using System;
using System.Threading.Tasks;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeworksController : ControllerBase
{
    private readonly Context _context = new Context(new DbContextOptions<Context>());
    [HttpGet("{id}")]
    public async Task<ActionResult<GetHomework>> GetHomework(int id)
    {
        throw new NotImplementedException();
    }

    [HttpPost]
    public async Task<ActionResult<PostHomework>> PostHomework([FromBody] PostHomework homework)
    {
        throw new NotImplementedException();
    }
}
