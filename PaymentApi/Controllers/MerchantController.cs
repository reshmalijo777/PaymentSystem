using Microsoft.AspNetCore.Mvc;
using PaymentApi.Models;
using System.Collections.Generic;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class MerchantController : ControllerBase
{
    private static readonly List<Merchant> Merchants = new()
    {
        new Merchant
        {
            Id = "merchant-a",
            DisplayName = "Merchant A",
            PrimaryColor = "#1a73e8",
            SecondaryColor = "#174ea6",
            LogoUrl = "https://example.com/merchantA-logo.png"
        },
        new Merchant
        {
            Id = "merchant-b",
            DisplayName = "Merchant B",
            PrimaryColor = "#34a853",
            SecondaryColor = "#1e8e3e",
            LogoUrl = "https://example.com/merchantB-logo.png"
        }
    };

    [HttpGet]
    public IActionResult GetMerchants() => Ok(Merchants);

    [HttpGet("{id}")]
    public IActionResult GetMerchantById(string id)
    {
        var merchant = Merchants.FirstOrDefault(m => m.Id == id);
        if (merchant == null) return NotFound(new { Message = "Merchant not found" });
        return Ok(merchant);
    }
}