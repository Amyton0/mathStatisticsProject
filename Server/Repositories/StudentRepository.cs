using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MathStatisticsProject.Models;
using MathStatisticsProject.Data;
using Microsoft.AspNetCore.Mvc.TagHelpers;

namespace Application.Services.Students
{
    public sealed class StudentService : IDisposable
    {
        private readonly Context db;

        public StudentService(Context db)
        {
            this.db = db;
        }

        public async Task<List<Student>> GetAllStudentsAsync()
        {
            return await db.Students.OrderBy(s => s.Id).ToListAsync();
        }

        public async Task<Student> GetStudentByIdAsync(Guid id)
        {
            return await db.Students.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> AddStudentAsync(string firstName, string secondName, string thirdName, string group)
        {
            await using var context = new Context();
            var student = new Student { 
                FirstName = firstName, 
                SecondName = secondName, 
                ThirdName = thirdName, 
                Group = group
            };
            context.Students.Add(student);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> UpdateStudentAsync(Guid studentId, string firstName, string secondName, string thirdName, string group)
        {
            var student = await GetStudentByIdAsync(studentId);
            if (student == null)
                return false;
            student.FirstName = firstName;
            student.SecondName = secondName;
            student.ThirdName = thirdName;
            student.Group = group;
            
            db.Students.Update(student);
            await db.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteStudentAsync(Guid studentId)
        {
            var student = await GetStudentByIdAsync(studentId);
            if (student == null)
                return false;
            db.Students.Attach(student);
            db.Students.Remove(student);
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
