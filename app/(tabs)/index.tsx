import TimeModal from "@/components/custom/TimeModal";
import WeightModal from "@/components/custom/WeightModal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import ParallaxScrollView from "@/components/ui/parallax/ParallaxScrollView";
import "@/css/global.css";
import { formatInputTime, formatInstructions } from "@/scripts/calculations";
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
  // const [calcWater, setCalcWater] = useState(0);
  // const [calcTime, setCalcTime] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [needsRecalculation, setNeedsRecalculation] = useState(false);

  const onCalculate = () => {
    setNeedsRecalculation(false);
    setInstructions(
      formatInstructions(inputWeight, inputTimeLow, inputTimeHigh)
    );
  };

  const onSetInputWeight = (weight: number) => {
    if (instructions.length) {
      setNeedsRecalculation(true);
    }

    setInputWeight(weight);
  };

  const onSetInputTimeLow = (low: number) => {
    if (instructions.length) {
      setNeedsRecalculation(true);
    }

    setInputTimeLow(low);
  };

  const onSetInputTimeHigh = (high: number) => {
    if (instructions.length) {
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
      <Heading className="mb-2 text-typography-950">
        {"Let's Get Started"}
      </Heading>

      <Text>1 - Enter the weight in onces of pasta you want to cook</Text>
      <Button
        size="md"
        variant="outline"
        action="primary"
        onPress={() => setInputWeightVisible(true)}
        className="bg-white"
      >
        <ButtonText>{`${inputWeight} oz`}</ButtonText>
      </Button>

      <Text>2 - Enter cooking time from the packaging.</Text>
      <Button
        size="md"
        variant="outline"
        action="primary"
        onPress={() => setInputTimeVisible(true)}
        className="bg-white"
      >
        <ButtonText>{formatInputTime(inputTimeLow, inputTimeHigh)}</ButtonText>
      </Button>

      <Text>3 - Now Calculate</Text>
      <Button
        action={needsRecalculation ? "negative" : "primary"}
        onPress={() => onCalculate()}
      >
        <ButtonText>
          {needsRecalculation ? "Recalculate" : "Calculate"}
        </ButtonText>
      </Button>

      {instructions && (
        <View>
          <Text>{instructions}</Text>
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
    </ParallaxScrollView>
  );
}
