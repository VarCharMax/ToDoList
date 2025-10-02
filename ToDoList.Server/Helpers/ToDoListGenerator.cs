using DBServer.Entity;

namespace ToDoList.Server.Helpers
{
  public static class ToDoListGenerator
  {
    private static readonly List<ToDoItem> lstToDoItems = [];

   
    public static List<ToDoItem> GenerateRandomItems()
    {
      lstToDoItems.Add(new ToDoItem { Title = "Buy groceries", IsCompleted = false });
      lstToDoItems.Add(new ToDoItem { Title = "Walk the dog", IsCompleted = true, CompletedDate = DateTime.Now.AddDays(-1) });
      lstToDoItems.Add(new ToDoItem { Title = "Finish project report", IsCompleted = false });
      lstToDoItems.Add(new ToDoItem { Title = "Call mom", IsCompleted = true, CompletedDate = DateTime.Now.AddDays(-2) });
      lstToDoItems.Add(new ToDoItem { Title = "Schedule dentist appointment", IsCompleted = false });

      return lstToDoItems;
    }
  }
}
