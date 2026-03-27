namespace PaymentApi.Models;

public class Merchant
{
    public string Id { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string PrimaryColor { get; set; } = "#000000";
    public string SecondaryColor { get; set; } = "#FFFFFF";
    public string LogoUrl { get; set; } = string.Empty;
}
