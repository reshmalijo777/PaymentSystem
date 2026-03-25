namespace PaymentApi.Contracts;

public record SubmitPaymentRequest(
    string MerchantId, decimal Amount, string Currency,
    string CardNumber, int ExpiryMonth, int ExpiryYear, string Cvv, string CustomerEmail
);

public record PaymentResponse(string PaymentReference, string Status, DateTime SubmittedAt);
