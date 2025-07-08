import NumberPicker from "@/components/NumberPicker";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import { X } from "lucide-react-native";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { Text } from "react-native";
import { Icon } from "./ui/icon";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  heading: string;
  body: string;
}>;

export default function InputModal({
  visible,
  setVisible,
  number,
  setNumber,
  heading,
  body,
}: Props) {
  return (
    <Modal isOpen={visible} onClose={() => setVisible(false)} useRNModal>
      <ModalBackdrop className="bg-white" />
      <ModalContent className="bg-white">
        <ModalHeader>
          <Heading size="lg">{heading}</Heading>
          <ModalCloseButton>
            <Icon
              as={X}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text className="text-lg">{body}</Text>
          <NumberPicker number={number} setNumber={setNumber} />
        </ModalBody>
        <ModalFooter className="flex-row justify-between">
          <Button
            size="lg"
            variant="outline"
            action="primary"
            // className="bg-black"
            onPress={() => setVisible(false)}
          >
            <ButtonText>Save</ButtonText>
          </Button>
          <Button
            size="lg"
            variant="outline"
            action="primary"
            onPress={() => setVisible(false)}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

//   modalView: {
//     height: 350,
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 10,
//     backgroundColor: "blue",
//     marginTop: 30,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: "white",
//   },
// });

//  {/* <View className="justify-center items-center" style={styles.centeredView}>
//   <View style={styles.modalView}>
//     {children}
//     <Pressable style={styles.button} onPress={() => setVisible(!visible)}>
//       <Text style={styles.buttonText}>Set</Text>
//     </Pressable>
//   </View>
// </View> */}
