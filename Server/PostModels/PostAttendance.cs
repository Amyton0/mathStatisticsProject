﻿
namespace MathStatisticsProject.PostModels
{
    public class PostAttendance
    {
        public int LessonNumber { get; set; }
        public DateTime Date { get; set; }
        public int[] StudentIds { get; set; }
        public PostStudent Student { get; set; }
    }
}
