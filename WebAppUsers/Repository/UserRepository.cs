using Models;

namespace WebAppUsers.Repository;

public class UserRepository : EfRepository<User>, IUserRepository
{
    public UserRepository(AppDbContext dbContext) : base(dbContext)
    {
    }
}