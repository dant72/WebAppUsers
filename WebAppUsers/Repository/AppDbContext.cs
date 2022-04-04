using Microsoft.EntityFrameworkCore;
using Models;

namespace WebAppUsers.Repository;

public class AppDbContext : DbContext
{
    private DbSet<User> Users => Set<User>();
    
    public AppDbContext(
        DbContextOptions<AppDbContext> options) 
        : base(options)
    {
        Database.EnsureCreated();
        //AddUsers(); 
        
    }

    private void AddUsers()
    {
        Users.Add(new User("Ivan", "Ivanovich", "Ivanov"));
        Users.Add(new User("Petr", "Petrov", "Petrovich")); 
        SaveChanges();
    }
    
}