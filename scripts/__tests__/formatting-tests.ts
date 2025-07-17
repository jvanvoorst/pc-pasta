import { formatCookTime, formatTime, formatWater } from "../formatting";

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

describe("formatCookTime", () => {
  it("should output 1 cup when time is 1", () => {
    expect(formatCookTime(1)).toBe("1 minute");
  });
  it("should output 2 cups when time is 2", () => {
    expect(formatCookTime(1)).toBe("1 minute");
  });
  it("should output 0 cups when time is -1", () => {
    expect(formatCookTime(1)).toBe("1 minute");
  });
});
