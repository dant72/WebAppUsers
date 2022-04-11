namespace Models;

public class User : IEntity
{
    public int Id { get; set; }

    public string Name { get; set; }
    
    public string Surname { get; set; }
    
    public string SecondName { get; set; }

    public User(string name, string surname, string secondName)
    {
        Name = name;
        Surname = surname;
        SecondName = secondName;
    }
    
    public User(){}
    
}