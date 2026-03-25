using Microsoft.AspNetCore.Mvc;
using PaymentApi.Contracts;
using PaymentApi.Services;

namespace PaymentApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PaymentsController : ControllerBase
{
    private readonly PaymentService _service;
    public PaymentsController(PaymentService service) => _service = service;

    [HttpPost]
    public IActionResult Post([FromBody] SubmitPaymentRequest req)
    {
        var response = _service.SubmitPayment(req);
        return Accepted(response);
    }
}
