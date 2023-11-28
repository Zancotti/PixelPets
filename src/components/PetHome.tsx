import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usePixelPetsContext } from "../hooks/usePixelPetsContext";
import { keyframes } from "@emotion/react";
import CustomButton from "./CustomButton";
import PetNameModal from "./PetNameModal";

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const PetHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedEgg } = usePixelPetsContext();
  const [clickCount, setClickCount] = useState(0);
  const [maxClicks, setMaxClicks] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShake, setShouldShake] = useState(false);
  const [petName, setPetName] = useState("");
  const progress = (clickCount / maxClicks) * 100;

  useEffect(() => {
    // Generate a random number between 5 and 20 for maxClicks
    setMaxClicks(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
  }, []);

  const clickEgg = () => {
    setShouldShake(true);
    setClickCount((prevClickCount) => prevClickCount + 1);

    if (clickCount + 1 >= maxClicks) {
      setIsVisible(false);
    }
    setTimeout(() => {
      setShouldShake(false);
    }, 500);
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
    <Box h="100vh" display="flex" flexDirection="column" padding={10}>
      <Box display="flex" justifyContent="center" marginBottom="40px">
        {isVisible && (
          <Image
            src={selectedEgg?.src}
            onClick={() => clickEgg()}
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
              animation: shouldShake ? `${shakeAnimation} 0.5s cubic-bezier(.36,.07,.19,.97) infinite` : "none",
            }}
          />
        )}
      </Box>
      <Box padding="4px">
        <Box
          backgroundColor="#E5E0D7"
          marginBottom={10}
          padding={6}
          sx={{
            boxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px #260e0b`,
            border: "2px solid #c8b2a1",
          }}
        >
          <Text textAlign="center" color="#2C130F" fontSize="3vh">
            {getFeedbackText(progress)}
          </Text>
        </Box>
      </Box>
      {clickCount === maxClicks && (
        <CustomButton display="flex" children="Name your pet" onClick={() => setIsOpen(true)} />
      )}

      <PetNameModal isOpen={isOpen} onClose={() => setIsOpen(false)} setPetName={setPetName} />
    </Box>
  );
};

export default PetHome;
