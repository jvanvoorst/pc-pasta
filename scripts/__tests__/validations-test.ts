import { formErrorLessThan, formErrorZero } from "@/constants/constants";
import { validateTimeForm, validateWeightForm } from "../validations";

describe("validateWeightForm", () => {
  it("should return correct object when weight is 0", () => {
    expect(validateWeightForm(0)).toEqual({
      valid: false,
      error: formErrorZero,
    });
  });
  it("should return correct object when weight is 1", () => {
    expect(validateWeightForm(1)).toEqual({
      valid: true,
      error: null,
    });
  });
});

describe("validateTimeForm", () => {
  it("should return correct object when low is 0 and high is 0", () => {
    expect(validateTimeForm(0, 0, true)).toEqual({
      valid: false,
      error: {
        low: formErrorZero,
        high: formErrorZero,
      },
    });
  });
  it("should return correct object when low is 1 and high is 0", () => {
    expect(validateTimeForm(1, 0, true)).toEqual({
      valid: false,
      error: {
        low: null,
        high: formErrorZero,
      },
    });
  });
  it("should return correct object when low is 0 and high is 1", () => {
    expect(validateTimeForm(0, 1, true)).toEqual({
      valid: false,
      error: {
        low: formErrorZero,
        high: null,
      },
    });
  });
  it("should return correct object when low is 1 and high is 1", () => {
    expect(validateTimeForm(1, 1, true)).toEqual({
      valid: false,
      error: {
        low: null,
        high: formErrorLessThan,
      },
    });
  });
});
