import { validateTimeForm } from "@/scripts/validations";
import { TimeFormError } from "@/types/types";
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
  const [error, setError] = useState<TimeFormError>({ low: "", high: [] });

  // when modal is re-opened it should always reset to inputTime
  useEffect(() => {
    if (visible) {
      setTimeLow(inputTimeLow);
      setTimeHigh(inputTimeHigh);
      setError({ low: "", high: [] });
    }
  }, [visible, inputTimeHigh, inputTimeLow]);

  const onSetVisible = () => {
    if (!range) {
      setInputTimeHigh(0);
    }
    setVisible(false);
  };

  const onSet = () => {
    const validation = validateTimeForm(timeLow, timeHigh);

    if (validation.valid) {
      setInputTimeLow(timeLow);
      setInputTimeHigh(timeHigh);
      onSetVisible();
    } else {
      setError(validation.error);
    }
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

      <NumberPicker number={timeLow} setNumber={setTimeLow} label="Low" />
      <Text className="text-error-500">{error.low}</Text>
      {range && (
        <>
          <NumberPicker
            number={timeHigh}
            setNumber={setTimeHigh}
            label="High"
          />
          {error.high.map((item) => (
            <Text key={item} className="text-error-500">
              {item}
            </Text>
          ))}
        </>
      )}
    </InputModal>
  );
}
