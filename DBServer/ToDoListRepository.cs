using AutoMapper;
using DBServer.Entity;
using DBServer.Interfaces;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.EntityFrameworkCore;
using Models.BindingTargets;
using System.Data;

namespace DBServer
{
  public class ToDoListRepository(DataContext ctx, IMapper mapper) : IToDoListRepository, IDisposable
  {
    private bool disposed;
    private readonly DataContext context = ctx;
    private readonly IMapper _mapper = mapper;

    public async Task<Models.DTO.ToDoItem> AddItemAsync(Models.DTO.ToDoItem item)
    {
      await context.ToDoItems.AddAsync(_mapper.Map<Entity.ToDoItem>(item));
      await context.SaveChangesAsync();

      return _mapper.Map<Models.DTO.ToDoItem>(GetItemByIdAsync(item.Id));
    }

    public async Task<bool> DeleteItemAsync(long id)
    {
      try
      {
        ToDoItem? item = context.ToDoItems.Find(id);

        if (item != null)
        {
          try
          {
            context.ToDoItems.Remove(item);

            await context.SaveChangesAsync();
          }
          catch(DataException de)
          {
            
          }

          return true;
        }

        return false;
      }
      catch (DataException)
      {
        return false;
      }
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
      var list = await context.Set<Entity.ToDoItem>().Select(p => _mapper.Map<Models.DTO.ToDoItem>(p)).ToListAsync();

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

    public async Task<Models.DTO.ToDoItem?> ReplaceItemAsync(long id, Models.DTO.ToDoItem item)
    {
      ToDoItem updateItem = _mapper.Map<ToDoItem>(item);

      context.Update(updateItem);
      await context.SaveChangesAsync();

      ToDoItem? result = await context.ToDoItems
               .FirstOrDefaultAsync(p => p.Id == id);

      var model = _mapper.Map<Models.DTO.ToDoItem>(result);

      return model;
    }
    
    public async Task<Models.DTO.ToDoItem?> UpdateItemAsync(long id, JsonPatchDocument<ToDoItemData> patch)
    {
      var toDoItem = await context.ToDoItems.FindAsync(id);
      if (toDoItem == null)
      {
        return null;
      }

      //Map entity to DTO
      ToDoItemData itemData = new() { ToDoItem = _mapper.Map<Models.DTO.ToDoItem>(toDoItem) };

      //Apply patch to Binding target.
      patch.ApplyTo(itemData);

      //Map changes back to entity
      _mapper.Map<ToDoItem>(itemData);

      await context.SaveChangesAsync();

      return itemData.ToDoItem;
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
