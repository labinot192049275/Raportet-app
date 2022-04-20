using Microsoft.AspNetCore.Mvc;
using PBC.Models;

namespace PBC.Controllers;

public class UserController : Controller
{
    //get
    public IActionResult Register()
    {
        return View();
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public IActionResult Register(User user)
    {
        if (ModelState.IsValid)
        {
            // Save user to database
            return RedirectToAction("Index", "Home");
        }
        return View(user);
    }

    //get
    public IActionResult Login()
    {
        return View();
    }

    //[HttpPost]
    //[ValidateAntiForgeryToken]
    //public IActionResult Login(ViewUserModel userModel)
    //{
    //    return View();
    //}


    //get
    public IActionResult Dashboard()
    {
        return View();
    }   
}

