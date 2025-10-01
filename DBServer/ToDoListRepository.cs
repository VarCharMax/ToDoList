using DBServer.DTO;
using DBServer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBServer
{
  public class ToDoListRepository : IToDoListRepository
  {
    public Task<ToDoItem> AddItemAsync(ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> DeleteItemAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> DeleteItemAsync(ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> DeleteItemAsync(List<ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public Task<List<ToDoItem>> GetAllItemsAsync()
    {
      throw new NotImplementedException();
    }

    public Task<ToDoItem?> GetItemByIdAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<int> GetItemsCountAsync()
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsCompletedAsync(List<ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(int id)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(ToDoItem item)
    {
      throw new NotImplementedException();
    }

    public Task<bool> MarkItemAsNotCompletedAsync(List<ToDoItem> items)
    {
      throw new NotImplementedException();
    }

    public Task<ToDoItem?> UpdateItemAsync(int id, ToDoItem item)
    {
      throw new NotImplementedException();
    }
  }
}
