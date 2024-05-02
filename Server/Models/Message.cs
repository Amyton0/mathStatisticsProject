namespace MathStatisticsProject.Models
{
    public class Message
    {
        public int Id { get; set; }
        //CR: у любого сообщения есть отправитель и получатель. А еще в качестве айдишников ты выбрал int32, а не string
        public string? Sender { get; set; }
        public string? Receiver { get; set; }
        //CR: не уверен, что контент должен быть nullable. Мы же не положим в базу пустое сообщение
        //Соответственно и не отдадим пустое
        public string? Content { get; set; }
    }
}
