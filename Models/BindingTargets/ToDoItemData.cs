using Models.DTO;
using System.ComponentModel.DataAnnotations;

namespace Models.BindingTargets
{
  public class ToDoItemData
  {
    [Required]
    public DateTime CreationDate
    {
      get => ToDoItem.CreationDate ?? default;
      set => ToDoItem.CreationDate = value;
    }

    public DateTime? CompletedDate {
      get => ToDoItem.CompletedDate ?? default;
      set => ToDoItem.CompletedDate = value;
    }

    public bool IsCompleted { get => ToDoItem.IsCompleted; set => ToDoItem.IsCompleted = value; }

    public ToDoItem ToDoItem { get; set; } = new ToDoItem();
  }
}
