namespace MathStatisticsProject.Models
{
    public class Attendance
    {
        // CR: Не знаю, обсуждали ли, но в идеале чтобы в этой таблице было какое-нибудь attendanceId,
        // связывающее с еще одной таблице - списком вида (attendanceId, studentId)
        // Тогда на каждую запись сэкономим на полях LessonNumber & Date. Пока давай так оставим, просто к сведению на будущее
        public int LessonNumber { get; set; }
        // CR: Не бывает пар без даты. Выбор string против DateTime нужно обосновать 
        public string? Date { get; set; }
        // CR: Пару же кто-то посетил. Или бывают фантомные студенты?
        public int? StudentId { get; set; }
        public Student Student { get; set; }
    }
}
