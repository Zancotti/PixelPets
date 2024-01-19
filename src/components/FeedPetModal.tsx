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
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import FoodItemRow from "./FoodItemRow";
import { capitalizeFirstLetter } from "../helpers/textHelper";

interface FeedPetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedPetModal: React.FC<FeedPetModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = () => {};
  const [petFood, setPetFood] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Submit on Enter key press
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={5}>
        <ModalHeader>Pixel Pet Palace</ModalHeader>
        <ModalCloseButton />
        <FoodItemRow w={""} text="oklart" />
        <ModalBody>
          <Input
            variant="outline"
            placeholder="Pet Name"
            value={petFood}
            onChange={(e) => setPetFood(capitalizeFirstLetter(e.target.value))}
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

export default FeedPetModal;
