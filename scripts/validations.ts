import { formErrorLessThan, formErrorZero } from "@/constants/constants";
import { TimeFormValidation, WeightFormValidation } from "@/types/types";

export function validateTimeForm(low: number, high: number, range: boolean) {
  let validation: TimeFormValidation = {
    valid: true,
    error: { low: null, high: null },
  };

  if (low < 1) {
    validation.valid = false;
    validation.error.low = formErrorZero;
  }

  if (range) {
    if (high < 1) {
      validation.valid = false;
      validation.error.high = formErrorZero;
    } else if (high <= low) {
      validation.valid = false;
      validation.error.high = formErrorLessThan;
    }
  }

  return validation;
}

export function validateWeightForm(weight: number) {
  let validation: WeightFormValidation = {
    valid: true,
    error: null,
  };

  if (weight < 1) {
    validation.valid = false;
    validation.error = formErrorZero;
  }

  return validation;
}
