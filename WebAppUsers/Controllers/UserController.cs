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
    [HttpPut]
    public Task Add([FromForm]User user)
    {
        return _userRepository.Add(user);
    }
    
    [HttpPatch]
    public Task Update([FromForm]User user)
    {
        return _userRepository.Update(user);
    }
    
    [HttpDelete]
    public Task Remove([FromForm]User user)
    {
        return _userRepository.Remove(user);
    }
}