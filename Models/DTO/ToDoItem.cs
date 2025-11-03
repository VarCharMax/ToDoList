using Models.Attributes;
using System.ComponentModel.DataAnnotations;

namespace Models.DTO
{
  public record ToDoItem
  {
    public long Id { get; set; }

    [Required(ErrorMessage = "Title is required.")]
    public string Title { get; set; } = String.Empty;

    [Required]
    public DateTime CreationDate { get; set; } = DateTime.Now.Date;

    public DateTime? CompletedDate { get; set; }

    [Required]
    [DueByDateRange]
    public DateTime DueBy { get; set; }

    public bool IsCompleted { get; set; }
  }
}
