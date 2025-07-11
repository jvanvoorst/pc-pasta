import { formErrorZero } from "@/constants/constants";
import { validateForm } from "../validations";

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
