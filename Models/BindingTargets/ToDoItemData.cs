using Helpers;
using Models.Attributes;
using Models.DTO;
using System.ComponentModel.DataAnnotations;

namespace Models.BindingTargets
{
  public record ToDoItemData
  {
    [Required(ErrorMessage ="Title is required.")]
    public string Title
    {
      get => ToDoItem.Title ?? string.Empty;
      set => ToDoItem.Title = value;
    } 

    [Required]
    public DateTime CreationDate
    {
      get => ToDoItem.CreationDate;
      set => ToDoItem.CreationDate = value;
    }

    [Required]
    [DueByDateRange]
    public DateTime DueBy
    {
      get => ToDoItem.DueBy;
      set => ToDoItem.DueBy = value;
    }

    public DateTime? CompletedDate
    {
      get => ToDoItem.CompletedDate ?? null;
      set => ToDoItem.CompletedDate = value;
    }

    [Required]
    public bool IsCompleted
    { 
      get => ToDoItem.IsCompleted; 
      set => ToDoItem.IsCompleted = value; 
    }

    [JSONDocumentProperty(Copy = false)]
    public ToDoItem ToDoItem { get; set; } = new ToDoItem();
  }
}
