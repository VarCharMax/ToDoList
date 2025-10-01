using Microsoft.AspNetCore.Mvc;

namespace ToDoList.Server.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }
  }
}
