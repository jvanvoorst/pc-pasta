import {
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { Text } from "react-native";
import { Button, ButtonText } from "../ui/button";
import InputModal from "./InputModal";
import NumberPicker from "./NumberPicker";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  inputTimeLow: number;
  setInputTimeLow: (low: number) => void;
  inputTimeHigh: number;
  setInputTimeHigh: (high: number) => void;
}>;

export default function TimeModal({
  visible,
  setVisible,
  inputTimeLow,
  setInputTimeLow,
  inputTimeHigh,
  setInputTimeHigh,
}: Props) {
  const [range, setRange] = useState(true);

  const onSetVisible = () => {
    if (!range) {
      setInputTimeHigh(0);
    }

    setVisible(false);
  };

  return (
    <InputModal visible={visible} setVisible={onSetVisible} header="Cook Time">
      <Text className="text-typography-500">
        Find the cooking time from your package. If it is only a single time
        click Single below
      </Text>
      <Button
        size="sm"
        variant="link"
        action="primary"
        onPress={() => setRange(!range)}
        className="justify-start mb-8"
      >
        <ButtonText>{range ? "Single" : "Range"}</ButtonText>
      </Button>

      <NumberPicker
        number={inputTimeLow}
        setNumber={setInputTimeLow}
        className="mb-4"
      />
      {range && (
        <NumberPicker number={inputTimeHigh} setNumber={setInputTimeHigh} />
      )}
    </InputModal>
  );
}
