import { formErrorLessThan, formErrorZero } from "@/constants/constants";
import { TimeFormValidation } from "@/types/types";

export function validateForm(weight: number, time: number) {
  let validation = { success: true, error: { weight: "", time: "" } };

  if (weight < 1) {
    validation.success = false;
    validation.error.weight = formErrorZero;
  }
  if (time < 1) {
    validation.success = false;
    validation.error.time = formErrorZero;
  }

  return validation;
}

export function validateTimeForm(low: number, high: number) {
  let validation: TimeFormValidation = {
    valid: true,
    error: { low: null, high: [] },
  };

  if (low < 1) {
    validation.valid = false;
    validation.error.low = formErrorZero;
  }

  if (high < 1) {
    validation.valid = false;
    validation.error.high.push(formErrorZero);
  }

  if (high <= low) {
    validation.valid = false;
    validation.error.high.push(formErrorLessThan);
  }

  return validation;
}
