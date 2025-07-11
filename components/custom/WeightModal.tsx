import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  const [weight, setWeight] = useState(inputWeight);

  useEffect(() => {
    if (visible) {
      setWeight(inputWeight);
    }
  }, [visible, inputWeight]);

  const onSet = () => {
    setInputWeight(weight);
  };

  return (
    <InputModal
      header="Pasta Weight"
      visible={visible}
      setVisible={setVisible}
      onSet={onSet}
    >
      <Text className="text-typography-500 mb-8">
        Set the weight in onces for the amount of pasta you are cooking. This
        will determine the amount of water to use.
      </Text>
      <NumberPicker number={weight} setNumber={setWeight} />
    </InputModal>
  );
}
