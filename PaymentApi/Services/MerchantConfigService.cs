using PaymentApi.Domain;

namespace PaymentApi.Services;

public class MerchantConfigService
{
    public Dictionary<string, MerchantConfig> Merchants = new()
    {
        ["merchant-a"] = new MerchantConfig() { Id = "merchant-a", Name = "Merchant A" },
        ["merchant-b"] = new MerchantConfig() { Id = "merchant-b", Name = "Merchant B" }
    };
}

public class MerchantConfig
{
    public string Id { get; set; } = "";
    public string Name { get; set; } = "";
}
