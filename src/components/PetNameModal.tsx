import {
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction, useState } from "react";
import CustomButton from "./CustomButton";

interface PetNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  setPetName: Dispatch<SetStateAction<string>>;
}

const PetNameModal: React.FC<PetNameModalProps> = ({ isOpen, onClose, setPetName }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    setPetName(name);
    onClose();
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={5}>
        <ModalHeader>Name your pet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            variant="outline"
            placeholder="Pet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </ModalBody>

        <ModalFooter>
          <CustomButton m={3} onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton onClick={handleSubmit}>Submit</CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PetNameModal;
