import { validateTimeForm } from "@/scripts/validations";
import { TimeFormError } from "@/types/types";
import {
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { View } from "react-native";
import { Button, ButtonText } from "../ui/button";
import { Text } from "../ui/text";
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
  const [timeLow, setTimeLow] = useState<number | null>(inputTimeLow);
  const [timeHigh, setTimeHigh] = useState<number | null>(inputTimeHigh);
  const [error, setError] = useState<TimeFormError>({ low: null, high: null });
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // when modal is re-opened it should always reset to inputTime
  useEffect(() => {
    if (visible) {
      setTimeLow(inputTimeLow);
      setTimeHigh(inputTimeHigh);
      setError({ low: null, high: null });
    }
  }, [visible, inputTimeHigh, inputTimeLow]);

  const onSetVisible = () => {
    if (!range) {
      setInputTimeHigh(0);
    }
    setVisible(false);
  };

  const onSetTimeLow = (time: number | null) => {
    if (time) setError({ ...error, low: null });
    setTimeLow(time);
  };

  const onSetTimeHigh = (time: number | null) => {
    if (time) setError({ ...error, high: null });
    setTimeHigh(time);
  };

  const onSet = () => {
    if (timeLow !== null && timeHigh !== null) {
      const validation = validateTimeForm(timeLow, timeHigh, range);

      if (validation.valid) {
        if (!range) {
          setTimeHigh(0);
        }
        setInputTimeLow(timeLow);
        setInputTimeHigh(timeHigh);
        onSetVisible();
      } else {
        setError(validation.error);
      }
    }
  };

  const getText = () =>
    `Find the cooking time from your package. ${
      range
        ? "If package only has a single time click single below."
        : "If packaging has a cook time range click range below."
    }`;

  return (
    <InputModal
      buttonDisabled={buttonDisabled}
      visible={visible}
      setVisible={onSetVisible}
      header="Cook Time"
      onSet={onSet}
    >
      <Text size="lg" className="text-typography-600">
        {getText()}
      </Text>
      <Button
        size="sm"
        variant="link"
        action="primary"
        onPress={() => setRange(!range)}
        className="justify-start mb-4"
      >
        <ButtonText className="text-theme-link">
          {range ? "Single" : "Range"}
        </ButtonText>
      </Button>

      <NumberPicker
        number={timeLow}
        setNumber={onSetTimeLow}
        label={range ? "Low" : ""}
        error={error.low}
        setButtonDisabled={setButtonDisabled}
      />
      {range && (
        <View className="mt-2">
          <NumberPicker
            number={timeHigh}
            setNumber={onSetTimeHigh}
            label="High"
            error={error.high}
            setButtonDisabled={setButtonDisabled}
          />
        </View>
      )}
    </InputModal>
  );
}
