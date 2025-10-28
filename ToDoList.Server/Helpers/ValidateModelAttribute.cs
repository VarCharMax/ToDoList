using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace ToDoList.Server.Helpers
{
  internal class ValidateModelAttribute : IActionFilter
  {
    public void OnActionExecuting(ActionExecutingContext context)
    {
      if (!context.ModelState.IsValid)
      {
        context.Result = new UnprocessableEntityObjectResult(context.ModelState);
      }
    }

    public void OnActionExecuted(ActionExecutedContext context) { }
  }
}
