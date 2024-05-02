namespace MathStatisticsProject.Models
{
    //CR: для чего этот класс будет применяться?
    public class ErrorViewModel
    {
        public string? RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}
