import Tile from "@/components/custom/Tile";
import { Text } from "@/components/ui/text";
import { negNumberWarning, zeroNote } from "@/constants/constants";
import { calculateTime, calculateWater } from "@/scripts/calculations";
import { formatCookTime, formatWater } from "@/scripts/formatting";
import { Heading } from "../ui/heading";

type Props = {
  visible: boolean;
  timeLow: number;
  timeHigh: number;
  weight: number | null;
};

export default function Instructions({
  visible,
  timeLow,
  timeHigh,
  weight,
}: Props) {
  const formattedWater = formatWater(calculateWater(weight));
  const calculatedTime = calculateTime(timeLow, timeHigh);
  const formattedTime = formatCookTime(calculatedTime);

  if (!visible) return null;

  return (
    <>
      <Tile animate>
        <Heading size="xl">Quick:</Heading>
        <Text size="lg">{`Water - ${formattedWater}   Time - ${formattedTime}`}</Text>
        {calculatedTime === -1 && (
          <Text size="lg" className="text-error-300 mb-2">
            {negNumberWarning}
          </Text>
        )}
      </Tile>

      <Tile animate>
        <Heading size="xl">Full:</Heading>
        <Text
          size="lg"
          className="mb-3"
        >{`1. Combine the ${weight} oz of pasta and ${formattedWater} water in the pressure cooker and give it a stir`}</Text>
        <Text size="lg" className="mb-3">
          2. Seal and lock the lid
        </Text>
        <Text size="lg">{`3. Pressure cook on high for ${formattedTime}`}</Text>
        {calculatedTime <= 0 && (
          <Text size="lg" className="text-error-300">
            {zeroNote}
          </Text>
        )}
        <Text size="lg" className="my-3">
          4. Let naturally release for 5 minutes then manually release the rest
        </Text>
        <Text size="lg" className="mb-3">
          5. Open lid and stir the pasta thoroughly
        </Text>
        <Text size="lg" className="mb-3">
          6. Put lid back on and let sit for another 5-10 minutes
        </Text>
        <Text size="lg">7. Done!</Text>
      </Tile>
    </>
  );
}
