namespace MathStatisticsProject.GetModels
{
    public class GetAttendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public int[] StudentIds { get; set; }
        public GetStudent Student { get; set; }
    }
}
