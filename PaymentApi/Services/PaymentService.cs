using PaymentApi.Contracts;
using PaymentApi.Domain;

namespace PaymentApi.Services;

public class PaymentService
{
    public PaymentResponse SubmitPayment(SubmitPaymentRequest req)
    {
        var payment = new Payment
        {
            MerchantId = req.MerchantId,
            Amount = req.Amount,
            MaskedCard = MaskCard(req.CardNumber),
            CustomerEmail = req.CustomerEmail
        };
        // Normally you'd push to SQS and EventBridge here
        var reference = $"PAY-{DateTime.UtcNow:yyyyMMddHHmmss}";
        return new PaymentResponse(reference, "Submitted", DateTime.UtcNow);
    }

    private static string MaskCard(string card) => $"**** **** **** {card[^4..]}";
}
