import TimeModal from "@/components/custom/TimeModal";
import WeightModal from "@/components/custom/WeightModal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import ParallaxScrollView from "@/components/ui/parallax/ParallaxScrollView";
import "@/css/global.css";
import { formatInstructions, formatTime } from "@/scripts/calculations";
import { validateForm } from "@/scripts/validations";
import type { FormatInstructionsReturnValue } from "@/types/types";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Home() {
  // modal visibility
  const [inputWeightVisible, setInputWeightVisible] = useState(false);
  const [inputTimeVisible, setInputTimeVisible] = useState(false);

  // user inputs
  const [inputWeight, setInputWeight] = useState(0);
  const [inputTimeLow, setInputTimeLow] = useState(0);
  const [inputTimeHigh, setInputTimeHigh] = useState(0);

  // output calculation
  const [instructions, setInstructions] =
    useState<FormatInstructionsReturnValue>({
      text: null,
      note: null,
      warning: null,
    });
  const [needsRecalculation, setNeedsRecalculation] = useState(false);

  // errors
  const [error, setError] = useState({ weight: "", time: "" });

  const onCalculate = () => {
    setNeedsRecalculation(false);

    const validation = validateForm(inputWeight, inputTimeLow);

    if (validation.success) {
      setInstructions(
        formatInstructions(inputWeight, inputTimeLow, inputTimeHigh)
      );
    } else {
      setError(validation.error);
    }
  };

  const onSetInputWeight = (weight: number) => {
    if (instructions.text) {
      setNeedsRecalculation(true);
    }
    setInputWeight(weight);
    setError({ ...error, weight: "" });
  };

  const onSetInputTimeLow = (low: number) => {
    if (instructions.text) {
      setNeedsRecalculation(true);
    }
    setInputTimeLow(low);
    setError({ ...error, time: "" });
  };

  const onSetInputTimeHigh = (high: number) => {
    if (instructions.text) {
      setNeedsRecalculation(true);
    }
    setInputTimeHigh(high);
  };

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          alt="Image"
          size="2xl"
          resizeMode="cover"
          source={require("@/assets/images/water_boiling.png")}
          className="w-full"
        />
      }
      className="bg-sky-50"
    >
      <View className="p-5">
        <Heading className="mb-4 text-typography-950">
          {"Let's Get Started"}
        </Heading>

        <Text>1 - Enter the weight in onces of pasta you want to cook</Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputWeightVisible(true)}
          className="bg-white mt-4"
        >
          <ButtonText>{`${inputWeight} oz`}</ButtonText>
        </Button>
        <Text className="text-error-900 mb-2">{error.weight}</Text>

        <Text>2 - Enter cooking time from the packaging.</Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputTimeVisible(true)}
          className="bg-white mt-4"
        >
          <ButtonText>{formatTime(inputTimeLow, inputTimeHigh)}</ButtonText>
        </Button>
        <Text className="text-error-900 mb-2">{error.weight}</Text>

        <Text>3 - Now Calculate</Text>
        <Button
          action={needsRecalculation ? "negative" : "primary"}
          onPress={() => onCalculate()}
          className="mt-4 mb-6"
        >
          <ButtonText>
            {needsRecalculation ? "Recalculate" : "Calculate"}
          </ButtonText>
        </Button>

        {instructions.text && (
          <View>
            <Text>{instructions.text}</Text>
            {instructions.warning && (
              <Text className="text-warning-500 mt-2">
                {instructions.warning}
              </Text>
            )}
            {instructions.note && (
              <Text className="text-info-700 mt-2">{instructions.note}</Text>
            )}
          </View>
        )}

        <TimeModal
          visible={inputTimeVisible}
          setVisible={setInputTimeVisible}
          inputTimeLow={inputTimeLow}
          setInputTimeLow={onSetInputTimeLow}
          inputTimeHigh={inputTimeHigh}
          setInputTimeHigh={onSetInputTimeHigh}
        />
        <WeightModal
          visible={inputWeightVisible}
          setVisible={setInputWeightVisible}
          inputWeight={inputWeight}
          setInputWeight={onSetInputWeight}
        />
      </View>
    </ParallaxScrollView>
  );
}
