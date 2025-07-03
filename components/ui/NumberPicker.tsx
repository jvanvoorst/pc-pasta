import { FontAwesome } from "@expo/vector-icons";
import type { Dispatch, SetStateAction } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
};

export default function NumberPicker({ number, setNumber }: Props) {
  // number should not go below 0
  const deprecateNumber = () => (number > 0 ? number - 1 : number);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setNumber(deprecateNumber())}
      >
        <FontAwesome size={28} name="minus" color={"blue"} />
      </Pressable>
      <View style={styles.number}>
        <Text style={styles.numberText}>{number}</Text>
      </View>

      <Pressable style={styles.button} onPress={() => setNumber(number + 1)}>
        <FontAwesome size={28} name="plus" color={"blue"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: "25%",
    width: "100%",
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
  numberText: {
    fontSize: 28,
  },
});
