import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import InputModal from "@/components/ui/InputModal";
import ParallaxScrollView from "@/components/ui/ParallaxScrollView";
import { useState } from "react";

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
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => setWeightVisible(true)}>
          <Text>Modal</Text>
        </Pressable>
        <InputModal
          visible={weightVisible}
          setVisible={setWeightVisible}
          number={weight}
          setNumber={setWeight}
        >
          <Text>instructions</Text>
        </InputModal>
      </View>
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
});
