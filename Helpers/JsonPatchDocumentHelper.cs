using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;
using System.ComponentModel.DataAnnotations;
using System.Reflection;

namespace Helpers
{
  public class JsonPatchDocumentHelper
  {
    public static JsonPatchDocument<TModelOut> CreateCopyOfOperations<TModelIn, TModelOut>(JsonPatchDocument<TModelIn> sourcePatchDocument)
    where TModelIn : class
    where TModelOut : class
    {
      var newPatchDocument = new JsonPatchDocument<TModelOut>();

      foreach (var operation in sourcePatchDocument.Operations)
      {
        newPatchDocument.Operations.Add(new Operation<TModelOut>(operation.op, operation.path, operation.from, operation.value));
      }

      return newPatchDocument;
    }

    public static JsonPatchDocument CreateCopyOfOperations(JsonPatchDocument sourcePatchDocument)
    {
      var newPatchDocument = new JsonPatchDocument();

      foreach (var operation in sourcePatchDocument.Operations)
      {
        newPatchDocument.Operations.Add(new Operation(operation.op, operation.path, operation.from, operation.value));
      }

      return newPatchDocument;
    }

    public static void ValidatePatch<TModel>(JsonPatchDocument<TModel> patch, Type currentModel, int numAllowedOperations, OperationType curOperation) 
      where TModel : class
    {
      var currentModelInstance = Activator.CreateInstance(currentModel) as TModel ?? 
        throw new InvalidOperationException("Could not create an instance of the current model.");
      
      if (patch.Operations.Count > numAllowedOperations || patch.Operations.Any(p => p.OperationType != curOperation))
      {
        throw new InvalidOperationException($"Invalid patch document.");
      }

      foreach (var operation in patch.Operations)
      {
        if (!PathExists(currentModelInstance, operation.path))
        {
          throw new InvalidOperationException($"Specified path: {operation.path} does not exist.");
        }

        switch (operation.op)
        {
          case "add":
            // Check if value type is incorrect.
            if (!IsValidForProperty(currentModelInstance, operation.path, operation.value))
            {
              throw new InvalidOperationException($"Value for path: {operation.path} is not valid");
            }
            break;
          case "replace":
            // Check if required property is present and at least has some value.
            if (!IsRequiredPropertyPresent(currentModelInstance, operation.path, operation.value))
            {
              throw new InvalidOperationException($"Value for required property at path: {operation.path} not supplied.");
            }
            // Check if value type is incorrect.
            if (!IsValidForProperty(currentModelInstance, operation.path, operation.value))
            {
              throw new InvalidOperationException($"Value for path: {operation.path} is not valid");
            }
            break;
        }
      }
    }

    private static bool IsValidForProperty<TModel>(TModel currentModel, string path, object? val) where TModel : class
    {
      var property = currentModel.GetType().GetProperty(path, BindingFlags.Instance | BindingFlags.Public | BindingFlags.IgnoreCase);

      Type propertyType = property!.PropertyType;

      var success = propertyType.IsAssignableFrom(val!.GetType());

      return success;
    }

    private static bool IsRequiredPropertyPresent<TModel>(TModel currentModel, string path, object? val) where TModel : class
    {
      var property = currentModel.GetType().GetProperty(path, BindingFlags.Instance | BindingFlags.Public | BindingFlags.IgnoreCase);

      var req = property!.GetCustomAttributes(false)
          .OfType<RequiredAttribute>()
          .SingleOrDefault();

      //If there's no Required attribute, then the property is not required, so just return true for convenience.
      if (req is null) return true;

      //Cast and check for null or empty values based on type.
      if (val is null)
      {
        return false;
      }
      else if (val is string strValue)
      {
        if (String.IsNullOrEmpty(strValue))
        {
          return false;
        }
      }
      else if (val is int intValue)
      {
        // Assume that if the int is zero or negative, it's invalid for a required field
        if (intValue <= 0)
        {
          return false;
        }
      }
      else if (val is double dblVal)
      {
        if (dblVal <= 0)
        {
          return false;
        }
      }
      else if (val is DateTime dateTimeValue)
      {
        if (dateTimeValue == default)
        {
          return false;
        }
      }

      return true;
    }

    private static bool PathExists<TModel>(TModel currentModel, string path) where TModel : class
    {
      var property = currentModel.GetType().GetProperty(path, BindingFlags.Instance | BindingFlags.Public | BindingFlags.IgnoreCase);

      if (property is null) return false;

      return true;
    }
  }
}
