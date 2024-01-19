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
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import CustomButton from "./CustomButton";
import { capitalizeFirstLetter } from "../helpers/textHelper";

interface PetNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  setPetName: Dispatch<SetStateAction<string>>;
}

const PetNameModal: React.FC<PetNameModalProps> = ({ isOpen, onClose, setPetName }) => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Explicitly define the type

  const handleSubmit = () => {
    setPetName(capitalizeFirstLetter(name));
    onClose();
  };

  useEffect(() => {
    // Focus on the input when the modal is opened
    console.log(inputRef.current);
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter key press
    if (event.key === "Enter" && name !== "") {
      handleSubmit();
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick closeOnEsc autoFocus>
      <ModalOverlay />
      <ModalContent m={5}>
        <ModalHeader>Name your pet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            ref={inputRef}
            variant="outline"
            placeholder="Pet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
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
