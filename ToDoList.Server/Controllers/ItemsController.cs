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
      catch (Exception)
      {
        return BadRequest("Error returning player list");
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
      if (ModelState.IsValid)
      {
        try
        {
          newItemId = await repos.AddItemAsync(item.ToDoItem);
        }
        catch (DataException)
        {
          return BadRequest("message: a database error occurred.");
        }
      }
      else
      {
        return BadRequest("message: the data was invalid.");
      }

      if (newItemId == 0)
      {
        return BadRequest("message: a database error occurred.");
      }

      //The framework returns JSON by default, but might return XML in some situations (which is the REST standard), so we use an explicit wrapper.
      return new JsonResult(newItemId);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<bool>> ReplaceItem(int id, [FromBody]ToDoItemData item)
    {
      int resultCount;

      if (ModelState.IsValid)
      {
        ToDoItem updateItem = item.ToDoItem;
        updateItem.Id = id;

        try
        {
          resultCount = await repos.ReplaceItemAsync(id, updateItem);
        }
        catch (Exception)
        {
          return BadRequest("message: a database error occurred.");
        }
      }
      else
      {
        return BadRequest();
      }

      if (resultCount != 1)
      {
        return BadRequest("message: update operation failed.");
      }

      return Ok(true);
    }

    [HttpPatch("{id}")]
    public async Task<ActionResult<bool>> UpdateItem(long id, [FromBody] JsonPatchDocument<ToDoItemData> patch)
    {
      //Patch operations pose a security risk because anyone with knowlege of the backend can potentially post a collection of patch operations to it.
      //Therefore we should implement some guards - e.g. the maximum number of operations, allowed paths, allowed values, etc.

      if (patch.Operations.Count > 2 || 
        patch.Operations.Any(p => p.OperationType != OperationType.Replace))
      {
        return BadRequest("Invalid patch document.");
      }
      
      bool result;
      
      if (ModelState.IsValid)
      {
        try
        {
          //Create new patch object to avoid exposing binding targets to repository.
          JsonPatchDocument<ToDoItem> patchUpdate = JsonPatchDocumentHelper.CreateCopyOfOperations<ToDoItemData, ToDoItem>(patch);        

          result = await repos.UpdateItemAsync(id, patchUpdate);
        }
        catch (Exception)
        {
          return BadRequest("message: a database error occurred.");
        }
      }
      else
      {
        return BadRequest();
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
