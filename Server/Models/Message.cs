﻿namespace MathStatisticsProject.Models
{
    public class Message
    {
        public int Id { get; set; }
        public int Sender { get; set; }
        public int Receiver { get; set; }
        public string Content { get; set; }
    }
}
