namespace MathStatisticsProject.Models
{
    public class Student
    {
        //CR: причина №1, почему отдаваемая клиентская модель не такая, как для POST'а или бд -
        // при посте клиентом зачастую не указывается айдишник, а генерится на стороне сервера.
        // при этом в модели он обязателен => будет ошибка
        public int Id { get; set; }
        //CR: безымянный студент, хмм. И на клиенте неочевидено, что порядок полного имени именно ФИО
        //А еще могут быть всякие Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas. 3 поля вместо одного должно быть
        public string? Name { get; set; }
        //CR: Насчет студентов без группы не уверен, объясни
        public string? Group { get; set; }
        //CR: причина №2, почему этого не должно быть - отдаваемая клиенту модель будет содержать эти списки, которые
        //в нормальной реализации всегда пусты
        public ICollection<Homework> Homeworks { get; set; }
        public ICollection<Attendance> Attendances { get; set; }
    }
}
