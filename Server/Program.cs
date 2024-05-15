using System.Text;
using Application.Services.Students;
using AutoMapper;
using MathStatisticsProject.Data;
using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;
using MathStatisticsProject.PostModels;
using MathStatisticsProject.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
    options.SerializerSettings.Converters.Add(new StringEnumConverter());
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});

builder.Services.AddControllers();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Your API", Version = "v1" });
});
builder.Services.AddAutoMapper(cfg => {
    cfg.CreateMap<Student, GetStudent>();
    cfg.CreateMap<Homework, GetHomework>();
    cfg.CreateMap<Homework, GetStudentHomeworks>();
    cfg.CreateMap<Attendance, GetAttendance>();
    cfg.CreateMap<GetAttendance, Attendance>();
    cfg.CreateMap<PostHomework, Homework>();
});

builder.Services.AddScoped<HomeworkRepository>();
builder.Services.AddScoped<AttendanceRepository>();
builder.Services.AddDbContext<Context>();
// Add repositories
builder.Services.AddScoped<StudentService>();


var app = builder.Build();
app.UseSwagger();

// Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Your API V1");
});

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
