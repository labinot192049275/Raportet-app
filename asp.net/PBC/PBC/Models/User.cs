using System.ComponentModel.DataAnnotations;

namespace PBC.Models;

public class User
{
    [Key]
    public int Id { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public string LastName { get; set; }
    [Required]
    public string Email { get; set; }
    [Required]
    public string Username { get; set; }
    [Required]
    public string Telephone { get; set; }
    [Required]
    public string DateOfBirth { get; set; }
    [Required]
    public string Password { get; set; }

}
