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
import { orangeColor } from "../colors";

interface PetNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  setPetName: Dispatch<SetStateAction<string>>;
}

const PetNameModal: React.FC<PetNameModalProps> = ({ isOpen, onClose, setPetName }) => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setPetName(capitalizeFirstLetter(name));
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter key press
    if (event.key === "Enter" && name !== "") {
      handleSubmit();
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick closeOnEsc autoFocus>
      <ModalOverlay />
      <ModalContent m={5} width={"325px"} aria-labelledby="pet-name-modal">
        <ModalHeader id="pet-name-modal">Name your pet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            maxLength={10}
            ref={inputRef}
            variant="outline"
            placeholder="Pet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            size="md"
          ></Input>
        </ModalBody>

        <ModalFooter>
          <CustomButton flex="1" mr={3} onClick={onClose} backgroundColor={orangeColor}>
            Cancel
          </CustomButton>
          <CustomButton flex="1" isDisabled={name === ""} onClick={handleSubmit}>
            Submit
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PetNameModal;
