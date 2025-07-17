import { Icon } from "@/components/ui/icon";
import { Minus, Plus } from "lucide-react-native";
import { useEffect } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";

type Props = {
  number: number | null;
  setNumber: (number: number | null) => void;
  className?: string;
  label?: string;
  error: string | null;
};

export default function NumberPicker({
  number,
  setNumber,
  className,
  label,
  error,
}: Props) {
  // number should not go below 1
  const onDeprecateNumber = () => {
    if (number !== null) setNumber(number > 0 ? number - 1 : number);
  };
  const onIncrementNumber = () => {
    if (number !== null) setNumber(number + 1);
  };
  const onChangeText = (text: string) => {
    const number = parseInt(text, 10);
    if (!isNaN(number)) setNumber(number);
    else setNumber(null);
  };

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      if (number === null) setNumber(0);
    });

    return () => {
      hideSubscription.remove();
    };
  }, [number, setNumber]);

  return (
    <View>
      <View className="flex-row justify-between">
        <Text className="mb-2">{label}</Text>
        <Text className="text-error-500">{error}</Text>
      </View>
      <View
        className={`flex-row border-2 rounded-md h-[50] items-center ${className}`}
      >
        <Pressable
          className="flex-[1] items-center justify-center"
          onPress={onDeprecateNumber}
        >
          <Icon className="h-[30] w-[30] text-info-600" as={Minus} />
        </Pressable>

        <View className="flex-[2] items-center">
          <TextInput
            className="text-2xl pb-1"
            inputMode="numeric"
            onChangeText={onChangeText}
            value={number === null ? "" : number.toString()}
            maxLength={2}
            clearTextOnFocus
            returnKeyType="done"
          />
        </View>

        <Pressable
          className="flex-[1] items-center justify-center"
          onPress={onIncrementNumber}
        >
          <Icon className="h-[30] w-[30] text-info-600" as={Plus} />
        </Pressable>
      </View>
    </View>
  );
}
