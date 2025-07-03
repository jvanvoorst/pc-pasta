import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
}>;

export default function InputModal({ children, visible, setVisible }: Props) {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}
          <Pressable style={styles.button} onPress={() => setVisible(!visible)}>
            <Text style={styles.buttonText}>Set</Text>
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
    height: 350,
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
  },
  button: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "blue",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
