namespace Models.DTO
{
  public class ToDoItem
  {
    public long Id { get; set; }

    public string Title { get; set; } = string.Empty;

    public DateTime? CreationDate { get; set; } = DateTime.Now.Date;

    public DateTime? CompletedDate { get; set; } = null;

    public DateTime? CompleteBy { get; set; } = null;

    public bool IsCompleted { get; set; } = false;
  }
}
