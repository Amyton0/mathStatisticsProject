using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MathStatisticsProject.Models;
using MathStatisticsProject.Data;

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

        public async Task<Student> GetStudentByIdAsync(int id)
        {
            return await db.Students.FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<bool> AddStudentAsync(int id, string name, string group)
        {
            var student = new Student
            {
                Id = id,
                Name = name,
                Group = group
            };

            await db.Students.AddAsync(student);
            return await db.SaveChangesAsync() >= 0;
        }

        public async Task<bool> UpdateStudentAsync(int studentId, int id, string name, string group)
        {
            var student = await db.Students.FirstOrDefaultAsync(s => s.Id == studentId);
            if (student == null)
                return false;
            student.Id = id;
            student.Name = name;
            student.Group = group;

            db.Students.Update(student);
            await db.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteStudentAsync(int studentId)
        {
            var student = new Student { Id = studentId };
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
