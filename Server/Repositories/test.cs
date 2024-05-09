using MathStatisticsProject.Data;
using MathStatisticsProject.Models;
using Microsoft.EntityFrameworkCore;

namespace MathStatisticsProject.Repositories;

public class test
{
    public void tt()
    {
        Console.WriteLine("Sdfsdafsdf");
        using var context = new Context();
        {
            if (context.Database.ProviderName == "Microsoft.EntityFrameworkCore.InMemory")
            {
                Console.WriteLine("Подключение к БД не удалось");
            }
            else
            {
                Console.WriteLine("Подключение к БД успешно");
            }
        }
    }
    
    public async Task addStudent(Guid id, string firstName, string secondName, string thirdName, string group)
    {
        using var context = new Context();
        var student = await context.Students.FirstOrDefaultAsync(x => x.Id == id);
        if (student != null)
        {
            Console.WriteLine("SAfffFFFFFFFFFFFFFFFFff");
            student.FirstName = firstName;
            student.SecondName = secondName;
            student.ThirdName = thirdName;
            student.Group = group;

            context.Students.Update(student);
            await context.SaveChangesAsync(); // Добавьте оператор await 
        }

    }
}