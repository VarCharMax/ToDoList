using DBServer.Interfaces;
using Helpers;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;
using Microsoft.AspNetCore.Mvc;
using Models.DTO;
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
      catch (Exception)
      {
        ModelState.AddModelError("Error", "Error retrieving ToDo list from database.");

        return BadRequest(ModelState);
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
      catch (Exception)
      {
        ModelState.AddModelError("Error", "Error retrieving ToDo list from database.");
        return BadRequest(ModelState);
      }

      if (item is null)
      {
        return NotFound();
      }

      return new JsonResult(item);
    }

    [HttpPost]
    public async Task<ActionResult<long>> PostItem([FromBody]ToDoItem item)
    {
      long newItemId;

      if (ModelState.IsValid == false)
      {
        return BadRequest(ModelState);
      }

      try
      {
        newItemId = await repos.AddItemAsync(item);
      }
      catch (DataException)
      {
        ModelState.AddModelError("Error", "Error adding ToDo item to database.");
        return BadRequest(ModelState);
      }

      if (newItemId == 0)
      {
        ModelState.AddModelError("Error", "Unknown error.");
        return NotFound(ModelState);
      }

      //The framework returns JSON by default, but might return XML in some situations (which is the REST standard), so we use an explicit wrapper.
      return Ok(newItemId);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<bool>> ReplaceItem(int id, [FromBody]ToDoItem item)
    {
      int resultCount;
      ToDoItem updateItem = item;

      if (ModelState.IsValid == false)
      {
        return BadRequest(ModelState);
      }

      try
      {
        resultCount = await repos.ReplaceItemAsync(id, item);
      }
      catch (Exception)
      {
        ModelState.AddModelError("Error", "Error updating ToDo item in database.");
        return BadRequest(ModelState);
      }

      if (resultCount != 1)
      {
        ModelState.AddModelError("Error", "Update operation failed.");
        return BadRequest(ModelState);
      }

      return Ok(true);
    }

    [HttpPatch("{id}")]
    public async Task<ActionResult<bool>> UpdateItem(long id, [FromBody] JsonPatchDocument<ToDoItem> patch)
    {
      try
      {
        //Patch operations are efficient from a database point of view, but pose a security risk, because anyone with knowlege of the backend can potentially
        //post an arbitrary collection of patch operations to it.
        //Therefore we implement some guards - e.g. the maximum number and type of operations, allowed paths, run validation, etc.
        JsonPatchDocumentHelper.ValidatePatch(ModelState, patch, 2, OperationType.Replace);
        
        if (ModelState.IsValid == false)
        {
          return BadRequest(ModelState);
        }
      }
      catch (Exception)
      {
        ModelState.AddModelError("Error", "Internal Error");
        return BadRequest(ModelState);
      }

      bool result;

      try
      {
        //You could return the updated object here and run further model validation on it if needed, but we just return success/failure for simplicity.
        result = await repos.UpdateItemAsync(id, patch);
      }
      catch (DataException)
      {
        ModelState.AddModelError("DBError", "A database error occurred.");
        return BadRequest(ModelState);
      }

      if (result == false)
      {
        ModelState.AddModelError("DBError", "An internal error occurred.");
        return BadRequest(ModelState);
      }

      return Ok(result);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<bool>> DeleteItem(int id)
    {
      bool result;

      try
      {
        result = await repos.DeleteItemAsync(id);
      }
      catch (DataException)
      {
        ModelState.AddModelError("DBError", "A database error occurred.");
        return BadRequest(ModelState);
      }

      if (result == false)
      {
        ModelState.AddModelError("Error", "Unknown error deleteing item.");
        return BadRequest(ModelState);
      }

      return Ok(result);
    }
  }
}
