import { negNumberWarning, zeroNote } from "@/constants/constants";
import { calculateTime, calculateWater } from "@/scripts/calculations";
import { formatCookTime, formatWater } from "@/scripts/formatting";
import { Text, View } from "react-native";

type Props = {
  visible: boolean;
  timeLow: number;
  timeHigh: number;
  weight: number | null;
  className: string;
};

export default function Instructions({
  visible,
  timeLow,
  timeHigh,
  weight,
  className,
}: Props) {
  const formattedWater = formatWater(calculateWater(weight));
  const calculatedTime = calculateTime(timeLow, timeHigh);
  const formattedTime = formatCookTime(calculatedTime);

  if (!visible) return null;

  return (
    <View className={className}>
      {calculatedTime === -1 && (
        <Text className="text-warning-500 mb-2">{negNumberWarning}</Text>
      )}
      <Text className="mb-3">{`1. Combine the ${weight} oz of pasta and ${formattedWater} water in the pressure cooker and give it a stir`}</Text>
      <Text className="mb-3">2. Seal and lock the lid</Text>
      <Text>{`3. Pressure cook on high for ${formattedTime}`}</Text>
      {calculatedTime <= 0 && (
        <Text className="text-warning-500">{zeroNote}</Text>
      )}
      <Text className="my-3">
        4. Let naturally release for 5 minutes then manually release the rest
      </Text>
      <Text className="mb-3">5. Open lid and stir the pasta thoroughly</Text>
      <Text className="mb-3">
        6. Put lid back on and let sit for another 5-10 minutes
      </Text>
      <Text>7. Done!</Text>
    </View>
  );
}
