import { calculateTime, calculateWater } from "../calculations";

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
