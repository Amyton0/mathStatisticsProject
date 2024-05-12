using MathStatisticsProject.Models;
using System.Buffers.Text;

namespace MathStatisticsProject.GetModels
{
    public class GetHomework
    {
        public Guid Id { get; set; }
        public Models.Type Type { get; set; }
        public int Number { get; set; }
        public DateTime Send { get; set; }
        public Status Status { get; set; }
        public Guid StudentId { get; set; }
        public GetMessage Message { get; set; }
        public string Content { get; set; }
    }
}
