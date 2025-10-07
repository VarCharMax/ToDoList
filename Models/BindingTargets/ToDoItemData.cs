using Models.DTO;
using System.ComponentModel.DataAnnotations;

namespace Models.BindingTargets
{
  public class ToDoItemData
  {
    [Required]
    public string Title
    {
      get => ToDoItem.Title ?? string.Empty;
      set => ToDoItem.Title = value;
    } 

    [Required]
    public DateTime CreationDate
    {
      get => ToDoItem.CreationDate ?? default;
      set => ToDoItem.CreationDate = value;
    }

    [Required]
    public DateTime? DueBy
    {
      get => ToDoItem.DueBy ?? default;
      set => ToDoItem.DueBy = value;
    }

    [Required]
    public bool IsCompleted { get => ToDoItem.IsCompleted; set => ToDoItem.IsCompleted = value; }

    public ToDoItem ToDoItem { get; set; } = new ToDoItem();
  }
}
