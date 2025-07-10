/**
 * Calculate the amount of water needed
 *
 * @export
 * @param {number} weight
 * @returns {string}
 */
export function calculateWater(weight: number): number {
  const waterPerOz = 0.25;
  const water = weight * waterPerOz;

  return water;
}

/**
 * Calculate the cooking time
 *
 * @export
 * @param {number} low
 * @param {(number | null)} high
 * @returns {number}
 */
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

export function formatInputTime(low: number, high: number) {
  let returnString = low.toString();

  if (high > 0) {
    returnString += ` - ${high.toString()} minutes`;
  } else {
    return (returnString += low > 0 ? " minutes" : " minute");
  }

  return returnString;
}

export function formatWater(water: number): string {
  let returnValue = "";

  const whole = Math.trunc(water);
  const fractional = water - whole;

  if (whole) {
    returnValue += whole.toString();
  }

  switch (fractional) {
    case 0.25:
      returnValue += " 1/4";
      break;
    case 0.5:
      returnValue += " 1/2";
      break;
    case 0.75:
      returnValue += " 3/4";
      break;

    default:
      break;
  }

  if (water > 1) {
    returnValue += " cups";
  } else {
    returnValue += " cup";
  }

  return returnValue.trim();
}

export function formatInstructions(
  water: number,
  timeLow: number,
  timeHigh: number
) {
  const calculatedWater = calculateWater(water);
  const calculatedTime = calculateTime(timeLow, timeHigh);
  const formattedWater = formatWater(calculatedWater);

  return `Use ${formattedWater} water. Set pressure cooker to ${calculatedTime} ${calculatedTime > 1 ? "minutes" : "minute"}`;
}
