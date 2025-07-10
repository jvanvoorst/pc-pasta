import { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Text } from "react-native";
import InputModal from "./InputModal";
import NumberPicker from "./NumberPicker";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  inputWeight: number;
  setInputWeight: (weight: number) => void;
}>;

export default function WeightModal({
  visible,
  setVisible,
  inputWeight,
  setInputWeight,
}: Props) {
  return (
    <InputModal header="Pasta Weight" visible={visible} setVisible={setVisible}>
      <Text className="text-typography-500 mb-8">
        Set the cook time from the package of the pasta
      </Text>
      <NumberPicker number={inputWeight} setNumber={setInputWeight} />
    </InputModal>
  );
}
