namespace Models.DTO
{
  public class ToDoItem
  {
    public long Id { get; set; }

    public DateTime? CreationDate { get; set; }

    public DateTime? CompletedDate { get; set; }

    public bool IsCompleted { get; set; }
  }
}
