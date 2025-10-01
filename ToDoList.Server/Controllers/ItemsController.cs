using DBServer.DTO;
using DBServer.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace ToDoList.Server.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ItemsController(IToDoListRepository repository) : ControllerBase
  {
    private readonly IToDoListRepository repos = repository;

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ToDoItem>>> GetAll()
    {
      List<ToDoItem> items;

      try
      {
        items = await repos.GetAllItemsAsync();
      }
      catch (Exception ex)
      {
        string message = ex.Message;

        return BadRequest("Error returning ToDo list");
      }

      return new JsonResult(items.ToList());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ToDoItem>> Get(int id)
    {
      ToDoItem? item;

      try
      {
        item = await repos.GetItemByIdAsync(id);
      }
      catch (Exception ex)
      {
        string message = ex.Message;

        return BadRequest("Error returning player list");
      }

      if (item is null)
      {
        return NotFound();
      }

      return new JsonResult(item);
    }

    [HttpPost]
    public async Task<ActionResult<ToDoItem>> PostItem(ToDoItem item)
    {
      if (item is not ToDoItem newItem)
      {
        return BadRequest("message: the data was invalid.");
      }

      try
      {
        newItem = await repos.AddItemAsync(newItem);
      }
      catch (DataException)
      {
        return BadRequest("message: a database error occurred.");
      }

      //The framework returns JSON by default, but might return XML in some situations (which is the REST standard), so we use an explicit wrapper.
      return new JsonResult(newItem);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutPlayer(int id, ToDoItem item)
    {
      if (item is not ToDoItem uItem)
      {
        return BadRequest();
      }

      ToDoItem? updatedItem;

      try
      {
        updatedItem = await repos.UpdateItemAsync(id, uItem);
      }
      catch (Exception)
      {
        return BadRequest("message: a database error occurred.");
      }

      if (updatedItem is null)
      {
        return BadRequest("message: a database error occurred.");
      }

      return new JsonResult(updatedItem);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletePlayer(int id)
    {
      bool result;

      try
      {
        result = await repos.DeleteItemAsync(id);
      }
      catch
      {
        return BadRequest("message: error deleting item");
      }

      if (result == true)
      {
        return Ok(result);
      }
      else
      {
        return BadRequest("message: error deleting item");
      }
    }
  }
}
