namespace PaymentApi.Models
{
    public class SubmitPaymentRequest
    {
        public string MerchantId { get; set; } = string.Empty;
        public decimal Amount { get; set; }
        public string CardNumber { get; set; } = string.Empty;
        public int ExpiryMonth { get; set; }
        public int ExpiryYear { get; set; }
        public string CVV { get; set; } = string.Empty;
        public string CustomerEmail { get; set; } = string.Empty;
    }
}