import Instructions from "@/components/custom/Instructions";
import TimeModal from "@/components/custom/TimeModal";
import WeightModal from "@/components/custom/WeightModal";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import ParallaxScrollView from "@/components/ui/parallax/ParallaxScrollView";
import "@/css/global.css";
import { formatTime } from "@/scripts/formatting";
import { useState } from "react";
import { Text, View } from "react-native";

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

        <Text className="mt-4">2 - Enter cooking time from the packaging.</Text>
        <Button
          size="md"
          variant="outline"
          action="primary"
          onPress={() => setInputTimeVisible(true)}
          className="bg-white mt-4"
        >
          <ButtonText>{formatTime(inputTimeLow, inputTimeHigh)}</ButtonText>
        </Button>

        <Instructions
          className="mt-4"
          visible={!!inputWeight && !!inputTimeLow}
          timeHigh={inputTimeHigh}
          timeLow={inputTimeLow}
          weight={inputWeight}
        />

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
      </View>
    </ParallaxScrollView>
  );
}
