﻿using System;
using System.Threading.Tasks;
using AutoMapper;
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
    private readonly Context _context;
    private readonly IMapper _mapper;

    public HomeworksController(Context context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<GetHomework>> GetHomework(int id)
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
}
