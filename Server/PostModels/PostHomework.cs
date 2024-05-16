using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;

namespace MathStatisticsProject.PostModels
{
    public class PostHomework
    {
        public Guid Id { get; set; }
        public Models.Complexity Complexity { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public Guid StudentId { get; set; }
        public string Message { get; set; }
        public string Content { get; set; }
        public double Points { get; set; }
    }
}
