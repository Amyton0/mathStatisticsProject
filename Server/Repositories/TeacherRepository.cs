using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MathStatisticsProject.Models;
using MathStatisticsProject.Data;
using Microsoft.AspNetCore.Mvc.TagHelpers;


namespace MathStatisticsProject.Repositories;

public class TeacherRepository
{
    public sealed class TeacherService : IDisposable
    {
        private readonly Context db;

        public TeacherService(Context db)
        {
            this.db = db;
        }

        public async Task<List<Teacher>> GetAllTeachersAsync()
        {
            return await db.Teachers.OrderBy(s => s.Id).ToListAsync();
        }

        public async Task<Teacher?> GetTeacherByIdAsync(Guid id)
        {
            return await db.Teachers.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> AddTeacherAsync(string firstName, string secondName, string thirdName)
        {
            var teacher = new Teacher
            {
                FirstName = firstName,
                SecondName = secondName,
                ThirdName = thirdName,
            };
            await db.Teachers.AddAsync(teacher);
            return await db.SaveChangesAsync() >= 0;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (db != null)
                {
                    db.Dispose();
                }
            }
        }
    }
}
    
