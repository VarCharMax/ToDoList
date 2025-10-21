using Microsoft.AspNetCore.JsonPatch;
using Models.DTO;

namespace DBServer.Interfaces
{
  public interface IToDoListRepository
  {
    public Task<List<ToDoItem>> GetAllItemsAsync(); 
    public Task<ToDoItem?> GetItemByIdAsync(long id);
    public Task<long> AddItemAsync(ToDoItem item);
    public Task<int> ReplaceItemAsync(long id, ToDoItem item);
    public Task<bool> UpdateItemAsync(long id, JsonPatchDocument<ToDoItem> patch);
    public Task<bool> DeleteItemAsync(long id);
    public Task<bool> DeleteItemAsync(ToDoItem item);
    public Task<bool> DeleteItemAsync(List<ToDoItem> items);
    // public Task<bool> MarkItemAsCompletedAsync(long id);
    // public Task<bool> MarkItemAsCompletedAsync(ToDoItem item);
    // public Task<bool> MarkItemAsCompletedAsync(List<ToDoItem> items);
    // public Task<bool> MarkItemAsNotCompletedAsync(long id);
    // public Task<bool> MarkItemAsNotCompletedAsync(ToDoItem item);
    // public Task<bool> MarkItemAsNotCompletedAsync(List<ToDoItem> items);
    public Task<int> GetItemsCountAsync();
  }
}
