import Instructions from "@/components/custom/Instructions";
import TimeModal from "@/components/custom/TimeModal";
import WeightModal from "@/components/custom/WeightModal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import ParallaxScrollView from "@/components/ui/parallax/ParallaxScrollView";
import { Text } from "@/components/ui/text";
import "@/css/global.css";
import { formatTime } from "@/scripts/formatting";
import { useState } from "react";
import { Pressable } from "react-native";
import Tile from "../../components/custom/Tile";

import bubbles from "@/assets/images/water_boiling.png";
import Animated, { useAnimatedRef } from "react-native-reanimated";

export default function Home() {
  // modal visibility
  const [inputWeightVisible, setInputWeightVisible] = useState(false);
  const [inputTimeVisible, setInputTimeVisible] = useState(false);

  // user inputs
  const [inputWeight, setInputWeight] = useState<number>(0);
  const [inputTimeLow, setInputTimeLow] = useState(0);
  const [inputTimeHigh, setInputTimeHigh] = useState(0);

  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const reset = () => {
    setInputWeight(0);
    setInputTimeLow(0);
    setInputTimeHigh(0);

    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <ParallaxScrollView
      img={bubbles}
      className="flex-1 m-6 gap-6"
      scrollRef={scrollRef}
    >
      <Tile>
        <Heading size="2xl" className="text-typography-950 mb-6">
          {"Let's Get Started"}
        </Heading>

        <Text size="lg" className="text-typography-600">
          Enter the weight in onces of pasta you want to cook
        </Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputWeightVisible(true)}
          className="bg-white mt-2 rounded-3xl border-theme-yellow border-2"
        >
          <ButtonText className="text-theme-link">{`${inputWeight} oz`}</ButtonText>
        </Button>

        <Text size="lg" className="mt-6 text-typography-600">
          Enter cooking time from the packaging.
        </Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputTimeVisible(true)}
          className="bg-white mt-2 rounded-3xl border-theme-yellow border-2"
        >
          <ButtonText className="text-theme-link">
            {formatTime(inputTimeLow, inputTimeHigh)}
          </ButtonText>
        </Button>
      </Tile>

      <Instructions
        visible={!!inputWeight && !!inputTimeLow}
        timeHigh={inputTimeHigh}
        timeLow={inputTimeLow}
        weight={inputWeight}
      />

      <Pressable onPress={() => reset()} className="items-center">
        <Image
          alt="pressure cooker"
          size="xl"
          source={require("@/assets/images/pressure-cooker.png")}
        />
      </Pressable>

      <TimeModal
        visible={inputTimeVisible}
        setVisible={setInputTimeVisible}
        inputTimeLow={inputTimeLow}
        setInputTimeLow={setInputTimeLow}
        inputTimeHigh={inputTimeHigh}
        setInputTimeHigh={setInputTimeHigh}
      />

      <WeightModal
        visible={inputWeightVisible}
        setVisible={setInputWeightVisible}
        inputWeight={inputWeight}
        setInputWeight={setInputWeight}
      />
    </ParallaxScrollView>
  );
}
