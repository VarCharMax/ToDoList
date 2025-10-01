using DBServer.Entity;
using System.Collections;

namespace ToDoList.Server.Helpers
{
  public static class ToDoListGenerator
  {
    private static readonly Random _random = new();
    private static readonly string[] positions = [.. EnumList.GetList<Enums.Positions>().Select(kvp => kvp.Value)];
    private static readonly string[] possibleSkills = [.. EnumList.GetList<Enums.Skills>().Select(kvp => kvp.Value)];
    private static readonly string[] firstNames = { "Liam", "Noah", "Oliver", "Theodore", "James", "Henry", "Mateo", "Elijah", "Lucas", "William", "Benjamin", "Levi", "Ezra", "Sebastian", "Jack", "Daniel", "Samuel", "Michael", "Ethan", "Asher" };
    private static readonly string[] lastNames = { "Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Moore" };
    private static readonly List<ToDoItem> lstToDoItems = [];

    private static string[] GenerateRandomNames(int numPlayers)
    {
      ArrayList names = [];

      for (int i = 0; i < numPlayers; i++)
      {
        string firstName = firstNames[_random.Next(firstNames.Length)];
        string lastName = lastNames[_random.Next(lastNames.Length)];

        if (names.Contains($"{firstName} {lastName}"))
        {
          i--;
          continue;
        }

        names.Add($"{firstName} {lastName}");
      }

      return (string[])names.ToArray(typeof(string));
    }

    private static string GenerateRandomPosition()
    {
      return positions[_random.Next(positions.Length)];
    }

    private static List<(string Skill, int Value)> GenerateRandomSkills(int numberOfSkills)
    {
      var skills = new List<(string Skill, int Value)>();
      var selectedSkills = new HashSet<string>();

      while (selectedSkills.Count < numberOfSkills && selectedSkills.Count < possibleSkills.Length)
      {
        string skill = possibleSkills[_random.Next(possibleSkills.Length)];
        
        //HashSet will weed out duplicates.
        if (selectedSkills.Add(skill))
        {
          int value = _random.Next(50, 101); // Skill value between 50 and 100
          skills.Add((skill, value));
        }
      }

      return skills;
    }

    public static List<ToDoItem> GenerateRandomItems(int numItems)
    {
      if (numItems >= firstNames.Length)
      {
        numItems = firstNames.Length;
      }

      string[] names = GenerateRandomNames(numItems);

      for (int i = 0; i < numItems; i++)
      {
        int numSkills = _random.Next(1, possibleSkills.Length + 1); // Each player can have between 1 and 5 skills
        var skills = GenerateRandomSkills(numSkills);
        var playerSkills = skills.Select(s => new PlayerSkill { Skill = s.Skill, Value = s.Value }).ToList();

        lstToDoItems.Add(new Player
        {
          Name = names[i],
          Position = GenerateRandomPosition(),
          PlayerSkills = playerSkills
        });
      }

      return lstToDoItems;
    }
  }
}
