namespace MathStatisticsProject.Models
{
    public class Homework
    {
        public int Id { get; set; }
        //CR: У любой домашки есть тип. И лучше enum. постгрес должен их тоже поддерживать(в виде строк или int32)
        public string? Type { get; set; }
        public int Number { get; set; }
        //CR: Фантомное время отправки?
        public string? Send { get; set; }
        //CR: Фантомный статус? Выбор невелик: отправлено, проверено, на дорешке, ...
        public string? Status { get; set; }
        public int StudentId { get; set; }
        public Student Student { get; set; }
        public Message Message { get; set; }
    }
}
