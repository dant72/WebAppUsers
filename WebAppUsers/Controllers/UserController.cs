using Microsoft.AspNetCore.Mvc;
using Models;
using WebAppUsers.Repository;

namespace WebAppUsers.Controllers;

public class UserController : ControllerBase
{
    
    private IUserRepository _userRepository;
    public UserController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }
    public Task<IReadOnlyList<User>> GetAll()
    {
        return _userRepository.GetAll();
    }
    [HttpPost]
    public Task Add([FromForm]User user)
    {
        return _userRepository.Add(user);
    }
}