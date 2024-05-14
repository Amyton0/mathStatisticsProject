namespace MathStatisticsProject.Models
{
    public class Message
    {
        public Guid Id { get; set; }
        public Guid Sender { get; set; }
        public Guid Receiver { get; set; }
        public byte[] Content { get; set; }
        public string WriteMessage { get; set; }
    }
}
