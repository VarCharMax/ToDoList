using DBServer.Entity;
using Microsoft.EntityFrameworkCore;

namespace DBServer
{
  public class DataContext(DbContextOptions<DataContext> options) : DbContext(options)
  {
    public DbSet<ToDoItem> ToDoItems { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
    }

  }
}
