using Microsoft.EntityFrameworkCore;
using WebAppUsers.Repository;

var dbPath = "myapp.db";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseSqlite($"Data Source={dbPath}"));
builder.Services.AddControllers();
var app = builder.Build();


app.MapGet("/", () => "Hello World!");

app.UseRouting();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Catalog}/{action=Products}/{id?}");

app.UseCors(policy =>
{
    policy
        .AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
});

app.Run();