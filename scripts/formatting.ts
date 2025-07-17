// makes string of high and low times and adds minute or minutes to time
// used for display in input box
export function formatTime(low: number, high: number) {
  let returnString = low.toString();

  if (high > 0) {
    returnString += ` - ${high.toString()} minutes`;
  } else {
    return (returnString += low > 1 ? " minutes" : " minute");
  }

  return returnString;
}

// format cook time adding minute or minutes
// used for instructions
export function formatCookTime(time: number) {
  const cookTime = time === -1 ? 0 : time;

  return `${cookTime} ${cookTime === 1 ? "minute" : "minutes"}`;
}

// changes decimal to fraction and adds cup, cups
// used for instructions
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
