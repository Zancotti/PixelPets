import React, { useState } from "react";
import {
  Select,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { usePixelPetsContext } from "../hooks/usePixelPetsContext";

interface FeedPetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedPetModal: React.FC<FeedPetModalProps> = ({ isOpen, onClose }) => {
  const { setSelectedPetFood } = usePixelPetsContext();
  const [food, setFood] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSelectElement>) => {
    // Submit on Enter key press
    if (e.key === "Enter" && food !== "") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSelectedPetFood(food);
    onClose();
  };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} closeOnOverlayClick closeOnEsc autoFocus>
      <ModalOverlay />
      <ModalContent m={5} width={"325px"} display={"flex"} alignItems={"center"} aria-labelledby="pet-food-modal">
        <ModalHeader id="pet-food-modal">Pixel Pet Palace</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Select
            placeholder="Select Pet Food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          >
            <option value="option1">Gourmet Salmon</option>
            <option value="option2">Velvety Sweet Potato Mash</option>
            <option value="option3">Olive Oil Elixir</option>
            <option value="option4">Fresh Parsley Garnish</option>
            <option value="option5">Eggstra Special Addition</option>
            <option value="option6">Salmon Delights</option>
            <option value="option7">Sweet Potato Bliss</option>
            <option value="option8">Aquatic Greenery Extravaganza</option>
            <option value="option9">Nutrient-Rich Pellet Surprise</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <CustomButton m={3} onClick={onClose}>
            Cancel
          </CustomButton>
          <CustomButton onClick={handleSubmit} isDisabled={food === ""}>
            Submit
          </CustomButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FeedPetModal;
