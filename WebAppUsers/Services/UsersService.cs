using WebAppUsers.Repository;

namespace WebAppUsers.Services;

public class UsersService
{
    private readonly IUserRepository _userRepository;

    public UsersService(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
}
