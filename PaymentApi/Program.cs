using Microsoft.OpenApi.Models;
using PaymentApi.Services;

var builder = WebApplication.CreateBuilder(args);

// 1️⃣ Configure services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Payment API", Version = "v1" });
});

builder.Services.AddSingleton<PaymentService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("[localhost](http://localhost:4200)")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// 2️⃣ Build the app
var app = builder.Build();

// 3️⃣ Configure middleware
app.UseCors("AllowFrontend");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.MapControllers();
app.Run();
