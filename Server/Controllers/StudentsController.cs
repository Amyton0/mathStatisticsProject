using System;
using System.Threading.Tasks;
using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly Context _context;
    private readonly IMapper _mapper;

    public StudentsController(Context context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetStudent>> GetStudent(Guid id)
    {
        var student = await _context.Students.FindAsync(id);

        if (student == null)
        {
            return NotFound();
        }

        var getStudent = _mapper.Map<GetStudent>(student);

        return getStudent;
    } // ok


    //CR: нам это не надо пока. Можно оставить, только не забудь, что не надо реализовывать
    [HttpPost]
    public async Task<ActionResult<PostStudent>> PostStudent([FromBody] PostStudent student)
    {
        throw new NotImplementedException();
    }
}
