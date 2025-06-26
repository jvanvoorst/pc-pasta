import { FontAwesome } from "@expo/vector-icons";
import type { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};

export default function NumberPicker({ number, setNumber }: Props) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => setNumber(number + 1)}>
        <FontAwesome size={28} name="plus" color={"red"} />
      </Pressable>
      <View style={styles.number}>
        <Text>{number}</Text>
      </View>
      <Pressable style={styles.button} onPress={() => setNumber(number - 1)}>
        <FontAwesome size={28} name="minus" color={"red"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: 200,
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 4,
  },
  button: {
    alignItems: "center",
    flex: 1,
  },
  number: {
    flex: 2,
    alignItems: "center",
  },
});
