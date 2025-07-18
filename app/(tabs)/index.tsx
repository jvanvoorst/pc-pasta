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
import { View } from "react-native";
import ThemedView from "../../components/custom/ThemedView";

export default function Home() {
  // modal visibility
  const [inputWeightVisible, setInputWeightVisible] = useState(false);
  const [inputTimeVisible, setInputTimeVisible] = useState(false);

  // user inputs
  const [inputWeight, setInputWeight] = useState<number>(0);
  const [inputTimeLow, setInputTimeLow] = useState(0);
  const [inputTimeHigh, setInputTimeHigh] = useState(0);

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          alt="Image"
          size="xl"
          resizeMode="cover"
          source={require("@/assets/images/water_boiling.png")}
          className="w-full"
        />
      }
      className="bg-secondary-100"
    >
      <View className="m-6">
        {/* Get Started */}
        <ThemedView>
          <Heading size="2xl" className="mb-4 text-typography-950">
            {"Let's Get Started"}
          </Heading>

          <Text size="lg">
            Enter the weight in onces of pasta you want to cook
          </Text>
          <Button
            size="md"
            variant="outline"
            action="primary"
            onPress={() => setInputWeightVisible(true)}
            className="bg-white mt-4 rounded-3xl border-theme-yellow border-2"
          >
            <ButtonText className="text-theme-link">{`${inputWeight} oz`}</ButtonText>
          </Button>

          <Text size="lg" className="mt-4">
            Enter cooking time from the packaging.
          </Text>
          <Button
            size="md"
            variant="outline"
            action="primary"
            onPress={() => setInputTimeVisible(true)}
            className="bg-white mt-4 rounded-3xl border-theme-yellow border-2"
          >
            <ButtonText className="text-theme-link">
              {formatTime(inputTimeLow, inputTimeHigh)}
            </ButtonText>
          </Button>
        </ThemedView>

        <Instructions
          visible={!!inputWeight && !!inputTimeLow}
          timeHigh={inputTimeHigh}
          timeLow={inputTimeLow}
          weight={inputWeight}
        />
      </View>

      <View className="items-center justify-center">
        <Image
          alt="pressure cooker"
          size="xl"
          source={require("@/assets/images/pressure-cooker-2.png")}
        />
      </View>
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
