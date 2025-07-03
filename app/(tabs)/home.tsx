import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";

import InputModal from "@/components/ui/InputModal";
import NumberPicker from "@/components/ui/NumberPicker";
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
        <Pressable onPress={() => setWeightVisible(true)}>
          <Text>Weight</Text>
        </Pressable>
        <Pressable onPress={() => setTimeVisible(true)}>
          <Text>Time</Text>
        </Pressable>
        <InputModal
          visible={weightVisible}
          setVisible={setWeightVisible}
          number={weight}
          setNumber={setWeight}
        >
          <View>
            <Text style={styles.inputHeader}>Pasta weight</Text>
            <Text style={styles.inputText}>
              Set the weight in oz of the pasta you want to cook
            </Text>
            <NumberPicker number={weight} setNumber={setWeight} />
          </View>
        </InputModal>
        <InputModal
          visible={timeVisible}
          setVisible={setTimeVisible}
          number={time}
          setNumber={setTime}
        >
          <View>
            <Text style={styles.inputHeader}>Cook Time</Text>
            <Text style={styles.inputText}>
              Set the cook time from the package of the pasta
            </Text>
            <NumberPicker number={time} setNumber={setTime} />
          </View>
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
