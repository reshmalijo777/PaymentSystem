using System;

namespace PaymentApi.Models
{
    public class PaymentResponse
    {
        public string PaymentReference { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    }
}