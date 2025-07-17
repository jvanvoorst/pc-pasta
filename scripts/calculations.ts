// Calculate the amount of water needed
export function calculateWater(weight: number | null): number {
  if (weight === null) {
    return 0;
  }
  const waterPerOz = 0.25;
  const water = weight * waterPerOz;

  return water;
}

//  Calculate the cooking time
export function calculateTime(low: number, high?: number): number {
  let calculationNumber = 0;

  if (high) {
    calculationNumber = low % 2 === 0 ? low : low + 1;
  } else {
    calculationNumber = low % 2 === 0 ? low : low - 1;
  }

  const calculated = calculationNumber / 2 - 2;

  return calculated >= 0 ? calculated : -1;
}
