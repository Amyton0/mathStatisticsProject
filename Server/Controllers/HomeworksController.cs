using System;
using System.Threading.Tasks;
using Application.Services.Students;
using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using MathStatisticsProject.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeworksController : ControllerBase
{
    private readonly Context _context;
    private readonly IMapper _mapper;
    private readonly HomeworkRepository _homeworkRepository;

    public HomeworksController(Context context, IMapper mapper, HomeworkRepository homeworkRepository)
    {
        _context = context;
        _mapper = mapper;
        _homeworkRepository = homeworkRepository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<GetHomework>>> GetHomeworks([FromQuery] Filter filter)
    {
        var homeworks = _context.Homeworks.AsQueryable();
        var filteredHomeworks = _homeworkRepository.TakeFilteredHomeworks(filter, homeworks.ToList());
        var homeworksWithStudent = filteredHomeworks.Select(x => _mapper.Map<GetStudentHomeworks>(x));
        foreach (var homework in homeworksWithStudent)
        {
            homework.Student = _mapper.Map<GetStudent>(await new StudentService(_context).GetStudentByIdAsync(homework.StudentId));
        }
        return Ok(homeworksWithStudent);
    }//ok

    [HttpGet("{id}")]
    public async Task<ActionResult<GetHomework>> GetHomework(Guid id)
    {
        var homework = await _context.Homeworks.FindAsync(id);

        if (homework == null)
        {
            return NotFound();
        }

        var getHomework = _mapper.Map<GetHomework>(homework);

        return getHomework;
    }//ok

    [HttpPut("{id}")]
    public async Task<ActionResult<PostHomework>> UpdateHomework(Guid id, [FromBody]PostHomework homework)
    {
        //if (homework.Status == Status.Checked)
        //    return Conflict("Домашка уже проверена");
        await _homeworkRepository.ChangePointsForHomework(id, homework.Points);
        await _homeworkRepository.ChangeStatusForHomework(id, homework.Status);
        return NoContent();
    }//ok


    [HttpPost]
    public async Task<ActionResult> PostHomework([FromBody] PostHomework homework)
    {
        var homeworkEntity = _mapper.Map<Homework>(homework);
        homeworkEntity.Send = DateTime.SpecifyKind(homeworkEntity.Send, DateTimeKind.Utc).ToUniversalTime();
        if (!await _homeworkRepository.SendHomeWork(homeworkEntity))
        {
            if (homeworkEntity.Status == Status.Sended)
            {
                await _context.SaveChangesAsync();
            }
            else
                return Forbid("Домашку может создать только студент");
        }

        return Ok();
    }//ok
    // переписать все контроллеры через репозитории
}
