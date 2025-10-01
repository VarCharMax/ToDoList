using AutoMapper;
using DBServer.Entity;
using DBServer.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace DBServer
{
  public class ToDoListRepository(DataContext ctx, IMapper mapper) : IToDoListRepository, IDisposable
  {
    private bool disposed;
    private readonly DataContext context = ctx;
    private readonly IMapper _mapper = mapper;

    public Task<DTO.ToDoItem> AddItemAsync(DTO.ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public async Task<bool> DeleteItemAsync(int id)
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

    public Task<bool> DeleteItemAsync(DTO.ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> DeleteItemAsync(List<DTO.ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public async Task<List<DTO.ToDoItem>> GetAllItemsAsync()
    {
      var list = await context.Set<Entity.ToDoItem>().Select(p => _mapper.Map<DTO.ToDoItem>(p)).ToListAsync();

      return list;
    }

    public async Task<DTO.ToDoItem?> GetItemByIdAsync(int id)
    {
      ToDoItem? result = await context.ToDoItems
               .FirstOrDefaultAsync(p => p.Id == id);
      
      var model = _mapper.Map<DTO.ToDoItem>(result);
      
       return model;
    }

    public Task<int> GetItemsCountAsync()
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(DTO.ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(List<DTO.ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(DTO.ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(List<DTO.ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public Task<DTO.ToDoItem?> UpdateItemAsync(int id, DTO.ToDoItem item)
    {
      throw new NotImplementedException();
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
