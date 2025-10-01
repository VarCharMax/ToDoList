using Xunit;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Moq;
using DBServer.Interfaces;

namespace UnitTests
{
  public class UnitTests
  {
    [Fact]
    public async Task ReturnAllDataAsync()
    {
      var mockREpositroyService = new Mock<IToDoListRepository>();


    }
  }
}
