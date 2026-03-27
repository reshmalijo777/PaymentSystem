using System;

namespace PaymentApi.Domain;

public class Payment
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string MerchantId { get; set; } = "";
    public decimal Amount { get; set; }
    public string Currency { get; set; } = "USD";
    public string MaskedCard { get; set; } = "";
    public string CustomerEmail { get; set; } = "";
    public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    public string Status { get; set; } = "Submitted";
}
