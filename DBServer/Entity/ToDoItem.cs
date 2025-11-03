using System.ComponentModel.DataAnnotations;

namespace DBServer.Entity
{
  public class ToDoItem
  {
    [Key]
    public long Id { get; set; }

    [MaxLength(50)]
    public string Title { get; set; } = String.Empty;

    [Required]
    public DateTime CreationDate { get; set; } = DateTime.Now.Date;

    public DateTime? CompletedDate { get; set; }

    public DateTime DueBy { get; set; }

    public bool IsCompleted { get; set; }
  }
}


