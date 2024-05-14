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
    }

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
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateHomeworkStatus(Guid id, [FromQuery] Status newStatus)
    {
        var homework = await _context.Homeworks.FindAsync(id);
        homework.Status = newStatus;
        _context.SaveChangesAsync();
        return Ok();
    }


    [HttpPost]
    public async Task<ActionResult> PostHomework([FromBody] PostHomework homework)
    {
        var homeworkEntity = _mapper.Map<Homework>(homework);
        homeworkEntity.Send = DateTime.SpecifyKind(homeworkEntity.Send, DateTimeKind.Utc).ToUniversalTime();
        if (!await _homeworkRepository.SendHomeWork(homeworkEntity))
        {
            await _context.SaveChangesAsync();
        }

        return Ok();
    }
    // переписать все контроллеры через репозитории
}
