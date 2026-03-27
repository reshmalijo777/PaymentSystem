using PaymentApi.Services;

var builder = WebApplication.CreateBuilder(args);

// ------------------------
// Add services
// ------------------------
builder.Services.AddControllers();

// Register PaymentService for DI
builder.Services.AddScoped<PaymentService>();

// Enable CORS for Angular (http://localhost:4200)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
    );
});

// Add Swagger for API documentation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ------------------------
// Middleware
// ------------------------

// Enable Swagger only in Development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        // Swagger UI available at /swagger
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Payment API V1");
        c.RoutePrefix = "swagger";
    });
}

app.UseCors("AllowAngular");

app.MapControllers();

app.Run();