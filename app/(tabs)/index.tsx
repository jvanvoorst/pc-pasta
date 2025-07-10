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

    // high should be equal to or greater than low
    if (inputTimeHigh < low) {
      setInputTimeHigh(low);
    }

    setInputTimeLow(low);
  };

  const onSetInputTimeHigh = (high: number) => {
    if (instructions.length) {
      setNeedsRecalculation(true);
    }

    // low should be less than or equal to high
    if (inputTimeLow > high) {
      setInputTimeLow(high);
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
          className="bg-white mt-4 mb-6"
        >
          <ButtonText>{`${inputWeight} oz`}</ButtonText>
        </Button>

        <Text>2 - Enter cooking time from the packaging.</Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputTimeVisible(true)}
          className="bg-white mt-4 mb-6"
        >
          <ButtonText>
            {formatInputTime(inputTimeLow, inputTimeHigh)}
          </ButtonText>
        </Button>

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
      </View>
    </ParallaxScrollView>
  );
}
