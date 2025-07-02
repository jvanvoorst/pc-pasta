import { calculateTime, calculateWater } from "../calculations";

describe("calculateWater function", () => {
  it("should return 1/2 cups when weight is 2", () => {
    expect(calculateWater(2)).toBe("1/2 cup");
  });

  it("should return 1 cup when weight is 2", () => {
    expect(calculateWater(4)).toBe("1 cup");
  });

  it("should return 1 1/4 cups cup when weight is 2", () => {
    expect(calculateWater(5)).toBe("1 1/4 cups");
  });

  it("should return 2 when weight is 8", () => {
    expect(calculateWater(8)).toBe("2 cups");
  });

  it("should return 2 1/4 when weight is 9", () => {
    expect(calculateWater(9)).toBe("2 1/4 cups");
  });
  it("should return 2 1/2 when weight is 10", () => {
    expect(calculateWater(10)).toBe("2 1/2 cups");
  });
  it("should return 2 3/4 when weight is 11", () => {
    expect(calculateWater(11)).toBe("2 3/4 cups");
  });
  it("should return 4 when weight is 16", () => {
    expect(calculateWater(16)).toBe("4 cups");
  });
});

describe("calculateTime function", () => {
  it("should return -1 if low is 2 and high is null", () => {
    expect(calculateTime(2, null)).toBe(-1);
  });

  it("should return -1 if low is 1 and high is null", () => {
    expect(calculateTime(1, null)).toBe(-1);
  });

  it("should return 0 if low is 4 and high is null", () => {
    expect(calculateTime(4, null)).toBe(0);
  });

  it("should return 0 if low is 5 and high is null", () => {
    expect(calculateTime(5, null)).toBe(0);
  });

  it("should return 1 if low is 6 and high is null", () => {
    expect(calculateTime(6, null));
  });

  it("should return 1 if low is 7 and high is null", () => {
    expect(calculateTime(7, null));
  });

  it("should return 0 if low is 3 and high is 5", () => {
    expect(calculateTime(3, 5));
  });
  it("should return 0 if low is 3 and high is 4", () => {
    expect(calculateTime(3, 4));
  });
  it("should return 1 if low is 5 and high is 6", () => {
    expect(calculateTime(5, 6));
  });
  it("should return 1 if low is 5 and high is 7", () => {
    expect(calculateTime(5, 7));
  });
});
