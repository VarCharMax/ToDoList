using DBServer.Interfaces;
using Helpers;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;
using Microsoft.AspNetCore.Mvc;
using Models.BindingTargets;
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
    public async Task<ActionResult<long>> PostItem([FromBody]ToDoItemData item)
    {
      long newItemId;

      try
      {
        newItemId = await repos.AddItemAsync(item.ToDoItem);
      }
      catch (DataException)
      {
        ModelState.AddModelError("Error", "Error adding ToDo item to database.");
        return BadRequest(ModelState);
      }

      if (newItemId == 0)
      {
        ModelState.AddModelError("Error", "Unknown error adding ToDo list to database.");
        return NotFound(ModelState);
      }

      //The framework returns JSON by default, but might return XML in some situations (which is the REST standard), so we use an explicit wrapper.
      return new JsonResult(newItemId);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<bool>> ReplaceItem(int id, [FromBody]ToDoItemData item)
    {
      int resultCount;
      ToDoItem updateItem = item.ToDoItem;
      updateItem.Id = id;

      try
      {
        resultCount = await repos.ReplaceItemAsync(id, updateItem);
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
    public async Task<ActionResult<bool>> UpdateItem(long id, [FromBody] JsonPatchDocument<ToDoItemData> patch)
    {      
      try
      {
        //Patch operations are efficient from a database point of view, but pose a security risk, because anyone with knowlege of the backend can potentially
        //post an arbitrary collection of patch operations to it.
        //Therefore we implement some guards - e.g. the maximum number and type of operations, allowed paths, run validation, etc.
        JsonPatchDocumentHelper.ValidatePatch(patch, 2, OperationType.Replace);
      }
      catch (InvalidOperationException ex)
      {
        //Note: While it's technically possible to add multiple ModelErrors, only the first will get returned to the client.
        //If you add more, all that will happen is that there will be an empty key added with the message "The input was invalid".
        ModelState.AddModelError("Error", $"{ex.Message}");
        
        return BadRequest(ModelState);
      }

      ModelState.AddModelError("Error", $"Test");

      bool result;

      try
      {
        //Create new patch object to avoid exposing binding targets to repository.
        JsonPatchDocument<ToDoItem>? patchUpdate = JsonPatchDocumentHelper.CreateCopyOfOperations<ToDoItemData, ToDoItem>(patch, ["ToDoItem"]);

        if (patchUpdate == null)
        {
          ModelState.AddModelError("Error", "Patch type does not match internal type.");

          return BadRequest(ModelState);
        }

        //You could return the updated object here and run further model validation on it if needed, but we just return success/failure for simplicity.
        result = await repos.UpdateItemAsync(id, patchUpdate);
      }
      catch (DataException)
      {
        ModelState.AddModelError("Error", "A database error occurred.");

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
        ModelState.AddModelError("Error", "A database error occurred.");

        return BadRequest(ModelState);
      }

      if (result == true)
      {
        return Ok(result);
      }
      else
      {
        ModelState.AddModelError("Error", "Unknown error deleteing item.");

        return BadRequest(ModelState);
      }
    }
  }
}
