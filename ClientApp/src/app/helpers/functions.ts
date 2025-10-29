import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noPastDatesValidator(control: AbstractControl): ValidationErrors | null {
      const selectedDate = new Date(control.value).removeTimeFromDate();
      const today = new Date().removeTimeFromDate();

      if (selectedDate < today) {
        return { 'pastDateInvalid': true };
      }
      return null;
    }