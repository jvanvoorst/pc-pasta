import { formErrorZero } from "@/constants/constants";

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
