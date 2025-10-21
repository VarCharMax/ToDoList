using AutoMapper;
using DBServer.Entity;
using DBServer.Interfaces;
using Helpers;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace DBServer
{

  public class ToDoListRepository(DataContext ctx, IMapper mapper) : IToDoListRepository, IDisposable
  {
    private bool disposed;
    private readonly DataContext context = ctx;
    private readonly IMapper _mapper = mapper;

    public async Task<long> AddItemAsync(Models.DTO.ToDoItem item)
    {
      long newId;

      try
      {
        var result = await context.ToDoItems.AddAsync(_mapper.Map<ToDoItem>(item));
        await context.SaveChangesAsync();

        newId = result.Entity.Id;

      }
      catch (DataException)
      {
        newId = -1;
      }
      
      return newId;
    }

    public async Task<bool> DeleteItemAsync(long id)
    {
      bool success = false;

      ToDoItem? item = context.ToDoItems.Find(id);

      if (item != null)
      {
        try
        {
          context.ToDoItems.Remove(item);

          await context.SaveChangesAsync();
        }
        catch(DataException)
        {
          success = false;
        }
      }
      
      return success;
    }

    public Task<bool> DeleteItemAsync(Models.DTO.ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> DeleteItemAsync(List<Models.DTO.ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public async Task<List<Models.DTO.ToDoItem>> GetAllItemsAsync()
    {
      var list = await context.Set<ToDoItem>()
        .OrderByDescending(p => p.Title)
        .ThenByDescending(p => p.DueBy)
        .ThenBy(p => p.IsCompleted) //Ascending
        .Select(p => _mapper.Map<Models.DTO.ToDoItem>(p)).ToListAsync();

      return list;
    }

    public async Task<Models.DTO.ToDoItem?> GetItemByIdAsync(long id)
    {
      ToDoItem? result = await context.ToDoItems
               .FirstOrDefaultAsync(p => p.Id == id);
      
      var model = _mapper.Map<Models.DTO.ToDoItem >(result);
      
       return model;
    }

    public Task<int> GetItemsCountAsync()
    {
      throw new NotImplementedException();
    }

    public async Task<int> ReplaceItemAsync(long id, Models.DTO.ToDoItem item)
    {
      int successCount;

      try
      {
        item.Id = id;

        context.Update(_mapper.Map<ToDoItem>(item));
        successCount = await context.SaveChangesAsync();
      }
      catch (DataException)
      {
        successCount = -1;
      }

      return successCount;
    }
    
    public async Task<bool> UpdateItemAsync(long id, JsonPatchDocument<Models.DTO.ToDoItem> patch)
    {
      //Convert the patch document from DTO to Entity type.
      JsonPatchDocument<ToDoItem> patchUpdate = JsonPatchDocumentHelper.CreateCopyOfOperations<Models.DTO.ToDoItem, ToDoItem>(patch);

      try
      {
        var toDoItem = await context.ToDoItems.FindAsync(id);
        if (toDoItem == null)
        {
          return false;
        }

        patchUpdate.ApplyTo(toDoItem);

        await context.SaveChangesAsync();
      }
      catch (DataException)
      {
        return false;
      }

      return true;
    }

    protected virtual void Dispose(bool disposing)
    {
      if (!disposed)
      {
        if (!this.disposed)
        {
          if (disposing)
          {
            context.Dispose();
          }
        }
        this.disposed = true;
      }
    }

    public void Dispose()
    {
      // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
      Dispose(disposing: true);
      GC.SuppressFinalize(this);
    }
  }
}
