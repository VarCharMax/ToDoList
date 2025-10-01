namespace DBServer.DTO
{
  public class ToDoItem
  {
    public int Id { get; set; }

    public DateTime? CreationDate { get; set; }

    public DateTime? CompletedDate { get; set; }

    public bool IsCompleted { get; set; }
  }
}
