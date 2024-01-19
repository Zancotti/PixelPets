import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import PetNameModal from "./PetNameModal";
import TextBox from "./TextBox";
import ShakeEgg from "./ShakeEgg";
import { capitalizeFirstLetter } from "../helpers/textHelper";
import FeedPetModal from "./FeedPetModal";

const PetHome: React.FC = () => {
  const [isPetNameModalOpen, setIsPetNameModalOpen] = useState(false);
  const [isFeedPetModalOpen, setIsFeedPetModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [maxClicks, setMaxClicks] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [petName, setPetName] = useState("");
  const progress = (clickCount / maxClicks) * 100;

  useEffect(() => {
    // Generate a random number between 5 and 20 for maxClicks
    setMaxClicks(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
  }, []);

  const clickEgg = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);

    if (clickCount + 1 >= maxClicks) {
      setIsVisible(false);
    }
  };

  const getFeedbackText = (progress: number) => {
    if (progress === 0) {
      return "Your pixel pet is ready to hatch! Tap the egg to give it a helping hand.";
    } else if (progress < 25) {
      return "Keep going! Each click brings your pet closer to seeing the world.";
    } else if (progress < 50) {
      return "You're doing great! Your pet's almost ready to hatch.";
    } else if (progress < 75) {
      return "Almost there! Your pet is about to hatch, keep clicking!";
    } else if (progress < 100) {
      return "This is it! With a few more clicks, your pixel pet will hatch into the world!";
    } else {
      return "Welcome to the world, little one! Your journey together begins now.";
    }
  };

  return (
    <Box
      display="grid"
      height="100%"
      gridTemplateRows={"auto 1fr auto"}
      padding={10}
      sx={{
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        animation: "fadeIn 1s ease-in-out forwards", // 1s duration, ease-in-out timing function
      }}
    >
      <Box display="flex" justifyContent="center" marginBottom="40px">
        {isVisible && <ShakeEgg clickEgg={clickEgg} />}
      </Box>
      {petName !== "" ? (
        <TextBox
          text={`Name locked in! ${capitalizeFirstLetter(
            petName
          )} is officially part of the family. ${petName} seems happy but hungry!`}
        />
      ) : (
        <TextBox text={getFeedbackText(progress)} />
      )}
      {clickCount === maxClicks && petName === "" && (
        <CustomButton display="flex" onClick={() => setIsPetNameModalOpen(true)}>
          Name your pet
        </CustomButton>
      )}

      {petName !== "" && (
        <CustomButton display="flex" onClick={() => setIsFeedPetModalOpen(true)}>
          Order food
        </CustomButton>
      )}

      <PetNameModal isOpen={isPetNameModalOpen} onClose={() => setIsPetNameModalOpen(false)} setPetName={setPetName} />
      <FeedPetModal isOpen={isFeedPetModalOpen} onClose={() => setIsFeedPetModalOpen(false)} />
    </Box>
  );
};

export default PetHome;
