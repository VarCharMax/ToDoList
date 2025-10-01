using DBServer;

namespace ToDoList.Server.Helpers
{
    public static class SeedData
    {
        public static void EnsurePopulated(DataContext context)
        {
            if (!context.ToDoItems.Any())
            {
                Console.WriteLine("Creating Seed Data...");

                context.ToDoItems.AddRange(ToDoListGenerator.GenerateRandomItems(15));
                context.SaveChanges();
            }
            else
            {
                Console.WriteLine("Seed Data Not Required...");
            }
        }
    }
}
