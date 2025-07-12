import { Icon } from "@/components/ui/icon";
import { Minus, Plus } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

type Props = {
  number: number;
  setNumber: (number: number) => void;
  className?: string;
  label?: string;
};

export default function NumberPicker({
  number,
  setNumber,
  className,
  label,
}: Props) {
  // number should not go below 1
  const deprecateNumber = () => (number > 0 ? number - 1 : number);

  return (
    <View>
      <Text className="mb-2">{label}</Text>
      <View
        className={`flex-row border-2 rounded-md h-[50] items-center ${className}`}
      >
        <Pressable
          className="flex-[1] items-center justify-center"
          onPress={() => setNumber(deprecateNumber())}
        >
          <Icon className="h-[30] w-[30] text-info-600" as={Minus} />
        </Pressable>

        <View className="flex-[2] items-center">
          <Text className="text-2xl">{number}</Text>
        </View>

        <Pressable
          className="flex-[1] items-center justify-center"
          onPress={() => setNumber(number + 1)}
        >
          <Icon className="h-[30] w-[30] text-info-600" as={Plus} />
        </Pressable>
      </View>
    </View>
  );
}
