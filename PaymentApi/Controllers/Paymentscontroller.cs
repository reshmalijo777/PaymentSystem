using Microsoft.AspNetCore.Mvc;
using PaymentApi.Models;
using PaymentApi.Services;

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
        return Ok(response);
    }
}