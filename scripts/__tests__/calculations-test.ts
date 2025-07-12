import { negNumberWarning, zeroNote } from "@/constants/constants";
import {
  calculateTime,
  calculateWater,
  formatInstructions,
  formatTime,
  formatWater,
} from "../calculations";

describe("calculate water function", () => {
  it("should return .25 when weight is 1", () => {
    expect(calculateWater(1)).toBe(0.25);
  });
  it("should return .5 when weight is 2", () => {
    expect(calculateWater(1)).toBe(0.25);
  });
  it("should return .75 when weight is 3", () => {
    expect(calculateWater(1)).toBe(0.25);
  });
  it("should return .1 when weight is 4", () => {
    expect(calculateWater(1)).toBe(0.25);
  });
});

describe("calculateTime function", () => {
  it("should return -1 if low is 2 and high is null", () => {
    expect(calculateTime(2)).toBe(-1);
  });

  it("should return -1 if low is 1 and high is null", () => {
    expect(calculateTime(1, 0)).toBe(-1);
  });

  it("should return 0 if low is 4 and high is null", () => {
    expect(calculateTime(4, 0)).toBe(0);
  });

  it("should return 0 if low is 5 and high is null", () => {
    expect(calculateTime(5, 0)).toBe(0);
  });

  it("should return 1 if low is 6 and high is null", () => {
    expect(calculateTime(6, 0)).toBe(1);
  });

  it("should return 1 if low is 7 and high is null", () => {
    expect(calculateTime(7, 0)).toBe(1);
  });

  it("should return 0 if low is 3 and high is 5", () => {
    expect(calculateTime(3, 5)).toBe(0);
  });
  it("should return 0 if low is 3 and high is 4", () => {
    expect(calculateTime(3, 4)).toBe(0);
  });
  it("should return 1 if low is 5 and high is 6", () => {
    expect(calculateTime(5, 6)).toBe(1);
  });
  it("should return 1 if low is 5 and high is 7", () => {
    expect(calculateTime(5, 7)).toBe(1);
  });
});

describe("formatTime function", () => {
  it("should return 1 minute when low is 1 and high is 0", () => {
    expect(formatTime(1, 0)).toBe("1 minute");
  });
  it("should return 2 minutes when low is 1 and high is 0", () => {
    expect(formatTime(2, 0)).toBe("2 minutes");
  });
  it("should return 1 - 5 minutes when low is 1 and high is 5", () => {
    expect(formatTime(1, 5)).toBe("1 - 5 minutes");
  });
  it("should return 7 - 8 minutes when low is 7 and high is 8", () => {
    expect(formatTime(7, 8)).toBe("7 - 8 minutes");
  });
});

describe("formatWater function", () => {
  it("should return 1/2 cups when weight is 2", () => {
    expect(formatWater(0.5)).toBe("1/2 cup");
  });

  it("should return 1 cup when weight is 2", () => {
    expect(formatWater(1)).toBe("1 cup");
  });

  it("should return 1 1/4 cups cup when weight is 2", () => {
    expect(formatWater(1.25)).toBe("1 1/4 cups");
  });

  it("should return 2 when weight is 8", () => {
    expect(formatWater(2)).toBe("2 cups");
  });

  it("should return 2 1/4 when weight is 9", () => {
    expect(formatWater(2.25)).toBe("2 1/4 cups");
  });
  it("should return 2 1/2 when weight is 10", () => {
    expect(formatWater(2.5)).toBe("2 1/2 cups");
  });
  it("should return 2 3/4 when weight is 11", () => {
    expect(formatWater(2.75)).toBe("2 3/4 cups");
  });
  it("should return 4 when weight is 16", () => {
    expect(formatWater(4)).toBe("4 cups");
  });
});

describe("formatInstructions function", () => {
  const note =
    "You can with most pressure cookers set 0 minutes of cook time. This just means it will come up to pressure and then stop";

  it("should return correct object when input is (8, 4, 6)", () => {
    expect(formatInstructions(8, 4, 6)).toEqual({
      text: "Use 2 cups water. Set pressure cooker to 0 minutes",
      note: zeroNote,
      warning: null,
    });
  });
  it("should return correct string when input is (16, 8, 10)", () => {
    expect(formatInstructions(16, 8, 10)).toEqual({
      text: "Use 4 cups water. Set pressure cooker to 2 minutes",
      note: null,
      warning: null,
    });
  });
  it("should return correct string when input is (16, 10, 0)", () => {
    expect(formatInstructions(16, 10, 0)).toEqual({
      text: "Use 4 cups water. Set pressure cooker to 3 minutes",
      note: null,
      warning: null,
    });
  });
  it("should return correct string when input is (16, 2, 0)", () => {
    expect(formatInstructions(16, 2, 0)).toEqual({
      text: "Use 4 cups water. Set pressure cooker to 0 minutes",
      note: zeroNote,
      warning: negNumberWarning,
    });
  });
});
