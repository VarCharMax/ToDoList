using DBServer.Entity;
using Microsoft.EntityFrameworkCore;

namespace DBServer
{
  public class DataContext : DbContext
  {
    public DataContext() { }

    public DataContext(DbContextOptions<DataContext> options)
         : base(options) { }

    public DbSet<ToDoItem> ToDoItems { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      base.OnModelCreating(builder);
    }

  }
}
