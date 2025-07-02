export function calculateWater(weight: number) {
  const waterPerOz = 0.25;
  const water = weight * waterPerOz;
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

export function calculateTime(low: number, high: number | null) {
  let calculationNumber = 0;

  if (high) {
    calculationNumber = low % 2 === 0 ? low : low + 1;
  } else {
    calculationNumber = low % 2 === 0 ? low : low - 1;
  }

  const calculated = calculationNumber / 2 - 2;

  return calculated >= 0 ? calculated : -1;
}
