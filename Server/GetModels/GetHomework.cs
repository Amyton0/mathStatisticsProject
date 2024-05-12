using MathStatisticsProject.Models;
using System.Buffers.Text;

namespace MathStatisticsProject.GetModels
{
    public class GetHomework
    {
        public int Id { get; set; }
        public Models.Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public int StudentId { get; set; }
        public GetMessage Message { get; set; }
        public string Content { get; set; }
    }
}
