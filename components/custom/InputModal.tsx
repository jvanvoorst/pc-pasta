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
import { Icon } from "../ui/icon";

type Props = PropsWithChildren<{
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  header: string;
  onSet: () => void;
}>;

export default function InputModal({
  visible,
  setVisible,
  header,
  children,
  onSet,
}: Props) {
  return (
    <Modal
      isOpen={visible}
      onClose={() => setVisible(false)}
      useRNModal
      avoidKeyboard
    >
      <ModalBackdrop />
      <ModalContent className="bg-white">
        <ModalHeader>
          <Heading className="mb-2 text-typography-950">{header}</Heading>
          <ModalCloseButton>
            <Icon
              as={X}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter className="mt-8">
          <Button
            size="lg"
            action="primary"
            variant="solid"
            className="w-full"
            onPress={() => {
              onSet();
            }}
          >
            <ButtonText>Set</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
