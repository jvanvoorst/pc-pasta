import InputModal from "@/components/InputModal";
import ParallaxScrollView from "@/components/ui/ParallaxScrollView";
import "@/css/global.css";
import { Image } from "expo-image";
import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function Home() {
  const [weightVisible, setWeightVisible] = useState(false);
  const [timeVisible, setTimeVisible] = useState(false);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("@/assets/images/derek-story-j5k9SOaI_V8-unsplash.jpg")}
          style={styles.image}
        />
      }
    >
      <Pressable onPress={() => setWeightVisible(true)}>
        <Text className="text-lg">Weight</Text>
      </Pressable>
      <Pressable onPress={() => setTimeVisible(true)} className="bg-primary-50">
        <Text>Time</Text>
      </Pressable>

      <InputModal
        visible={timeVisible}
        setVisible={setTimeVisible}
        number={time}
        setNumber={setTime}
        heading="Cook Time"
        body="Set the cook time from the package of the pasta"
      />

      <InputModal
        visible={weightVisible}
        setVisible={setWeightVisible}
        number={weight}
        setNumber={setWeight}
        heading="Pasta weight"
        body="Set the weight in oz of the pasta you want to cook"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  inputHeader: {
    fontWeight: 600,
    fontSize: 22,
    paddingBottom: 20,
  },
  inputText: {
    fontSize: 18,
    paddingBottom: 20,
  },
});
