using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace DBServer.Entity
{
  public class ToDoItem
  {
    [Key]
    public long Id { get; set; }

    [NotNull]
    public string? Title { get; set; }

    [NotNull]
    public DateTime CreationDate { get; set; }

    public DateTime? CompletedDate { get; set; }

    [NotNull]
    public DateTime? DueBy { get; set; }

    [NotNull]
    public bool IsCompleted { get; set; }
  }
}


