import { validateWeightForm } from "@/scripts/validations";
import { WeightFormError } from "@/types/types";
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
  inputWeight: number | null;
  setInputWeight: (weight: number) => void;
}>;

export default function WeightModal({
  visible,
  setVisible,
  inputWeight,
  setInputWeight,
}: Props) {
  const [weight, setWeight] = useState<number | null>(inputWeight);
  const [error, setError] = useState<WeightFormError>(null);

  useEffect(() => {
    if (visible) {
      setWeight(inputWeight);
      setError(null);
    }
  }, [visible, inputWeight]);

  const onSetWeight = (weight: number | null) => {
    if (weight) setError(null);
    setWeight(weight);
  };

  const onSet = () => {
    if (weight !== null) {
      const validation = validateWeightForm(weight);

      if (validation.valid) {
        setInputWeight(weight);
        setVisible(false);
      } else {
        setError(validation.error);
      }
    }
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
      <NumberPicker
        number={weight}
        setNumber={onSetWeight}
        label="Oz"
        error={error}
      />
    </InputModal>
  );
}
