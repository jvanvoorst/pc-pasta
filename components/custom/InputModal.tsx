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
  buttonDisabled: boolean;
}>;

export default function InputModal({
  visible,
  setVisible,
  header,
  children,
  onSet,
  buttonDisabled,
}: Props) {
  return (
    <Modal
      isOpen={visible}
      onClose={() => setVisible(false)}
      useRNModal
      avoidKeyboard
    >
      <ModalBackdrop />
      <ModalContent className="bg-white rounded-xl">
        <ModalHeader>
          <Heading size="xl" className="mb-2 text-typography-950">
            {header}
          </Heading>
          <ModalCloseButton>
            <Icon as={X} size="xl" className="text-theme-link" />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button
            size="lg"
            action="primary"
            variant="solid"
            className="w-full bg-theme-blue"
            onPress={() => {
              onSet();
            }}
            isDisabled={buttonDisabled}
          >
            <ButtonText>Set</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
