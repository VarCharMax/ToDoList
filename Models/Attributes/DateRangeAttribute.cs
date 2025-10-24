using System.ComponentModel.DataAnnotations;

namespace Models.Attributes
{
  public class DueByDateRangeAttribute : ValidationAttribute
  {
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
      if (value is not DateTime dateTimeValue)
      {
        return new ValidationResult("Invalid date value.");
      }
      
      if (DateTime.Now.CompareTo(dateTimeValue) < 0)
      {
        return ValidationResult.Success!;
      }
      else
      {
        return new ValidationResult("Due by date cannot be in the past.");
      }
    }
  }
}
