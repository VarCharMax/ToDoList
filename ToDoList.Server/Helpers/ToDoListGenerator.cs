using DBServer.Entity;

namespace ToDoList.Server.Helpers
{
  public static class ToDoListGenerator
  {
    private static readonly List<ToDoItem> lstToDoItems = [];

   
    public static List<ToDoItem> GenerateRandomItems()
    {
      lstToDoItems.Add(new ToDoItem { Title = "Buy groceries", CreationDate = DateTime.Now.Date, IsCompleted = false, DueBy = DateTime.Now.AddDays(5).Date });
      lstToDoItems.Add(new ToDoItem { Title = "Walk the dog", CreationDate = DateTime.Now.Date, IsCompleted = true, DueBy = DateTime.Now.AddDays(-1).Date, CompletedDate = DateTime.Now.AddDays(-1).Date });
      lstToDoItems.Add(new ToDoItem { Title = "Finish project report", CreationDate = DateTime.Now.Date, IsCompleted = false, DueBy = DateTime.Now.AddDays(5).Date });
      lstToDoItems.Add(new ToDoItem { Title = "Call mum", IsCompleted = true, CreationDate = DateTime.Now.Date, DueBy = DateTime.Now.AddDays(-2).Date, CompletedDate = DateTime.Now.AddDays(-1).Date });
      lstToDoItems.Add(new ToDoItem { Title = "Schedule dentist appointment", CreationDate = DateTime.Now.Date, IsCompleted = false, DueBy = DateTime.Now.AddDays(2).Date });

      return lstToDoItems;
    }
  }
}
