using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.JsonPatch.Operations;

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
  }
}
