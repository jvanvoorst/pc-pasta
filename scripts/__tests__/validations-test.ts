import { formErrorLessThan, formErrorZero } from "@/constants/constants";
import {
  validateForm,
  validateTimeForm,
  validateWeightForm,
} from "../validations";

describe("validateForm function", () => {
  it("should return correct object when weight is 0 and time is 0", () => {
    expect(validateForm(0, 0)).toEqual({
      success: false,
      error: {
        weight: formErrorZero,
        time: formErrorZero,
      },
    });
  });
  it("should return correct object when weight is 1 and time is 0", () => {
    expect(validateForm(1, 0)).toEqual({
      success: false,
      error: {
        weight: "",
        time: formErrorZero,
      },
    });
  });
  it("should return correct object when weight is 0 and time is 1", () => {
    expect(validateForm(0, 1)).toEqual({
      success: false,
      error: {
        weight: formErrorZero,
        time: "",
      },
    });
  });
  it("should return correct object when weight is 1 and time is 1", () => {
    expect(validateForm(1, 1)).toEqual({
      success: true,
      error: {
        weight: "",
        time: "",
      },
    });
  });
});

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
