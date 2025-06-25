import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ui/ParallaxScrollView";

export default function Home() {
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
