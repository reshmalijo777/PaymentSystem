using PaymentApi.Models;
using System;

namespace PaymentApi.Services
{
    public class PaymentService
    {
        public PaymentResponse SubmitPayment(SubmitPaymentRequest request)
        {
            return new PaymentResponse
            {
                PaymentReference = Guid.NewGuid().ToString("N").ToUpper(),
                Status = "Success",
                SubmittedAt = DateTime.UtcNow
            };
        }
    }
}