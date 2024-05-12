using MathStatisticsProject.GetModels;
using MathStatisticsProject.Models;

namespace MathStatisticsProject.PostModels
{
    public class PostHomework
    {
        public Models.Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public int StudentId { get; set; }
        public PostMessage Message { get; set; }
        public byte[] Content { get; set; }
    }
}
