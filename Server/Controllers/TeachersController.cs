﻿using System;
using System.Threading.Tasks;
using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using MathStatisticsProject.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MathStatisticsProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeachersController : ControllerBase
{
    private readonly Context _context;
    private readonly IMapper _mapper;

    public TeachersController(Context context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetTeacher>> GetTeacher(Guid id)
    {
        var teacherRepository = new TeacherRepository(new Context());
        var teacher = await GetTeacher(id);

        if (teacher == null)
        {
            return NotFound();
        }

        var getTeacher = _mapper.Map<GetTeacher>(teacher);

        return getTeacher;
    }//не ок

    //CR: нам это не надо пока. Можно оставить, только не забудь, что не надо реализовывать
    [HttpPost]
    public async Task<ActionResult<PostTeacher>> PostTeacher([FromBody] PostTeacher teacher)
    {
        throw new NotImplementedException();
    }
}