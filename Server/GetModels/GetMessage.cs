namespace MathStatisticsProject.GetModels
{
    public class GetMessage
    {
        public Guid? Id { get; set; }
        public int? Sender { get; set; }
        public int? Receiver { get; set; }
        public string? Content { get; set; }
    }
}
