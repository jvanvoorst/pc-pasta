import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import NumberPicker from "./NumberPicker";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
}>;

export default function InputModal({
  children,
  visible,
  setVisible,
  number,
  setNumber,
}: Props) {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>{children}</Text>
          <NumberPicker number={number} setNumber={setNumber} />
          <Pressable style={styles.button} onPress={() => setVisible(!visible)}>
            <Text>Set</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    // backgroundColor: "light-blue",
  },
});
