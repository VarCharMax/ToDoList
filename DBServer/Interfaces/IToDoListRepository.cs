namespace DBServer.Interfaces
{
  public interface IToDoListRepository
  {
    public Task<List<DTO.ToDoItem>> GetAllItemsAsync(); 
    public Task<DTO.ToDoItem?> GetItemByIdAsync(int id);
    public Task<DTO.ToDoItem> AddItemAsync(DTO.ToDoItem item);
    public Task<DTO.ToDoItem?> UpdateItemAsync(int id, DTO.ToDoItem item);
    public Task<bool> DeleteItemAsync(int id);
    public Task<bool> DeleteItemAsync(DTO.ToDoItem item);
    public Task<bool> DeleteItemAsync(List<DTO.ToDoItem> items);
    public Task<bool> MarkItemAsCompletedAsync(int id);
    public Task<bool> MarkItemAsCompletedAsync(DTO.ToDoItem item);
    public Task<bool> MarkItemAsCompletedAsync(List<DTO.ToDoItem> items);
    public Task<bool> MarkItemAsNotCompletedAsync(int id);
    public Task<bool> MarkItemAsNotCompletedAsync(DTO.ToDoItem item);
    public Task<bool> MarkItemAsNotCompletedAsync(List<DTO.ToDoItem> items);
    public Task<int> GetItemsCountAsync();
  }
}
