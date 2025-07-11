import { negNumberWarning, zeroNote } from "@/constants/constants";

// Calculate the amount of water needed
export function calculateWater(weight: number): number {
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

// makes string of high and low times and adds minute or minutes to time
export function formatTime(low: number, high: number) {
  let returnString = low.toString();

  if (high > 0) {
    returnString += ` - ${high.toString()} minutes`;
  } else {
    return (returnString += low > 1 ? " minutes" : " minute");
  }

  return returnString;
}

// changes decimal to fraction and adds cup, cups
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

type FormatInstructionsReturnValue = {
  instructions: string;
  warning: string | null;
  note: string | null;
};

// format the output from calculateTime and calculateWater into the instructions string
export function formatInstructions(
  weight: number,
  timeLow: number,
  timeHigh: number
): FormatInstructionsReturnValue {
  const calculatedWater = calculateWater(weight);
  let calculatedTime = calculateTime(timeLow, timeHigh);
  const formattedWater = formatWater(calculatedWater);

  let returnValue: FormatInstructionsReturnValue = {
    instructions: "",
    warning: null,
    note: null,
  };

  // calculatedTime will return -1 for any calculation less than 0 to indicate we need to add a warning
  if (calculatedTime === -1) {
    returnValue.warning = negNumberWarning;
    calculatedTime = 0;
  }

  if (calculatedTime === 0) {
    returnValue.note = zeroNote;
  }

  returnValue.instructions = `Use ${formattedWater} water. Set pressure cooker to ${calculatedTime} ${calculatedTime === 1 ? "minute" : "minutes"}`;

  return returnValue;
}
