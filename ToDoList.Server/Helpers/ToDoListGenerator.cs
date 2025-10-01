using DBServer.Entity;
using System.Collections;

namespace ToDoList.Server.Helpers
{
  public static class ToDoListGenerator
  {
    private static readonly List<ToDoItem> lstToDoItems = [];

   
    public static List<ToDoItem> GenerateRandomItems(int numItems)
    {
      return lstToDoItems;
    }
  }
}
