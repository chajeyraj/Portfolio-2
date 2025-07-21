using Microsoft.EntityFrameworkCore;
using Portfolio.Data;
using Portfolio.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Add Entity Framework
builder.Services.AddDbContext<PortfolioDbContext>(options =>
    options.UseInMemoryDatabase("PortfolioDb"));

// Add custom services
builder.Services.AddScoped<IStorageService, StorageService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Configure to listen on port 5000
app.Urls.Add("http://0.0.0.0:5000");

app.UseCors("AllowAll");

// Serve static files from client dist folder
app.UseStaticFiles();
app.UseDefaultFiles(new DefaultFilesOptions
{
    DefaultFileNames = new List<string> { "index.html" }
});

app.UseAuthorization();

app.MapControllers();

// Fallback to serve index.html for client-side routing
app.MapFallbackToFile("index.html");

// Seed data
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<PortfolioDbContext>();
    var storage = scope.ServiceProvider.GetRequiredService<IStorageService>();
    await storage.SeedDataAsync();
}

app.Run("http://0.0.0.0:5000");