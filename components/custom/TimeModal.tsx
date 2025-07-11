import {
  useEffect,
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
  const [timeLow, setTimeLow] = useState(inputTimeLow);
  const [timeHigh, setTimeHigh] = useState(inputTimeHigh);

  // when modal is re-opened it should always start from inputTime
  useEffect(() => {
    if (visible) {
      setTimeLow(inputTimeLow);
      setTimeHigh(inputTimeHigh);
    }
  }, [visible, inputTimeHigh, inputTimeLow]);

  const onSetVisible = () => {
    if (!range) {
      setInputTimeHigh(0);
    }
    setVisible(false);
  };

  const onSetTimeLow = (low: number) => {
    // low should be less than or equal to high
    if (timeHigh < low) {
      setTimeHigh(low);
    }
    setTimeLow(low);
  };

  const onSetTimeHigh = (high: number) => {
    // low should be less than or equal to high
    if (timeLow > high) {
      setTimeLow(high);
    }
    setTimeHigh(high);
  };

  const onSet = () => {
    setInputTimeLow(timeLow);
    setInputTimeHigh(timeHigh);
  };

  return (
    <InputModal
      visible={visible}
      setVisible={onSetVisible}
      header="Cook Time"
      onSet={onSet}
    >
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
        <ButtonText className="text-info-600">
          {range ? "Single" : "Range"}
        </ButtonText>
      </Button>

      <NumberPicker
        number={timeLow}
        setNumber={onSetTimeLow}
        label="Low"
        className="mb-4"
      />
      {range && (
        <NumberPicker
          number={timeHigh}
          setNumber={onSetTimeHigh}
          label="High"
        />
      )}
    </InputModal>
  );
}
