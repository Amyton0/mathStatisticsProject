using System;
using System.Threading.Tasks;
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
        return Ok(filteredHomeworks);
    }

    // 1. Создаешь модель GetStudentsHomeworks
    // 2. Наследую от GetHomeworks
    // 3. Добавляю в модель из п.1 GetStudent
    // 4. Беру список отфильтрованных домашек и автомаппером маплю в модель из п.1
    // 5. Пробегаюсь по новому списку и добавляю студента

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

    [HttpPost]
    public async Task<ActionResult<PostHomework>> PostHomework([FromBody] PostHomework homework)
    {
        var homeworkEntity = _mapper.Map<Homework>(homework);

        _context.Homeworks.Add(homeworkEntity);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetHomework", new { id = homeworkEntity.Id }, homework);
    }
    // переписать все контроллеры через репозитории
}
