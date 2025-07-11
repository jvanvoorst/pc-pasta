export function validateForm(weight: number, time: number) {
  let validation = { success: true, error: { weight: "", time: "" } };
  const errorMsg = "must be greater than 0";

  if (weight < 1) {
    validation.success = false;
    validation.error.weight = errorMsg;
  }
  if (time < 1) {
    validation.success = false;
    validation.error.time = errorMsg;
  }

  return validation;
}
