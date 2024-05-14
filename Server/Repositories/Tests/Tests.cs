/*namespace MathStatisticsProject.Repositories.Tests;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using MathStatisticsProject.Models;
using MathStatisticsProject.Repositories;

public class Tests
{
    [TestFixture]
    public class HomeworkRepositoryTests
    {
        private HomeworkRepository homeworkRepository;
        
        [SetUp]
        public void Setup()
        {
            // Подготовка объекта HomeworkRepository для тестирования
            // Обычно здесь нужно было бы использовать фейковую базу данных или моки
            // Но для примера просто создадим пустой объект
            homeworkRepository = new HomeworkRepository(null);
        }

        [Test]
        public void TakeFilteredHomeworks_ShouldReturnFilteredHomeworks()
        {
            // Создаем тестовые данные
            List<Homework> testHomeworks = new List<Homework>
            {
                new Homework { Number = 1, Status = Status.Doreshka, Type = Models.Type.Grob},
                new Homework { Number = 2, Status = Status.Checked, Type = Models.Type.Grob },
                new Homework { Number = 1, Status = Status.Sended, Type = Models.Type.DZ }
            };
            
            List<Student> students = new List<Student>
            {
                new 
            }

            Filter testFilter = new Filter
            {
                HomeworkIndexes = 1,
                Groups = new List<string> { "GroupA" },
                statusHomeworks = new List<Status> { Status.Checked }
            };

            // Вызываем метод, который мы хотим протестировать
            IEnumerable<Homework> result = homeworkRepository.TakeFilteredHomeworks(testFilter, testHomeworks.ToList());

            // Проверяем, что результат соответствует ожиданиям
            Assert.AreEqual(1, result.Count());

            Homework filteredHomework = result.FirstOrDefault();
            Assert.IsNotNull(filteredHomework);
            Assert.AreEqual(1, filteredHomework.Number);
            Assert.AreEqual(Status.Completed, filteredHomework.Status);
            Assert.AreEqual("GroupA", filteredHomework.Group);
        }
    }


}*/