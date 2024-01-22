import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import PetNameModal from "./PetNameModal";
import TextBox from "./TextBox";
import FeedPetModal from "./FeedPetModal";
import { usePixelPetsContext } from "../hooks/usePixelPetsContext";
import { doesPetLikeFood, getFeedbackText, getFoodFeedbackText } from "../helpers/textHelper";
import ShakePicture from "./ShakePicture";
import { orangeColor } from "../colors";

interface PetHomeProps {
  onRestartGame: () => void;
}

const PetHome: React.FC<PetHomeProps> = ({ onRestartGame }) => {
  const [isPetNameModalOpen, setIsPetNameModalOpen] = useState(false);
  const [isFeedPetModalOpen, setIsFeedPetModalOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [maxClicks, setMaxClicks] = useState(1);
  const [isEggVisible, setIsEggVisible] = useState(true);
  const [petName, setPetName] = useState("");
  const progress = (clickCount / maxClicks) * 100;
  const { selectedEgg, selectedPetFood } = usePixelPetsContext();

  useEffect(() => {
    // Generate a random number between 5 and 20 for maxClicks
    setMaxClicks(Math.floor(Math.random() * (20 - 5 + 1)) + 5);
  }, []);

  const clickEgg = () => {
    setClickCount((prevClickCount) => prevClickCount + 1);

    if (clickCount + 1 >= maxClicks) {
      setIsEggVisible(false);
    }
  };

  const renderShakePicture = () => {
    if (isEggVisible && selectedEgg) {
      return <ShakePicture clickPicture={clickEgg} pictureSrc={selectedEgg?.eggSrc} />;
    }

    if (!isEggVisible && selectedEgg) {
      if (!selectedPetFood) {
        return <ShakePicture pictureSrc={selectedEgg?.petSrc.neutral} />;
      } else if (selectedPetFood && doesPetLikeFood(selectedEgg.type, selectedPetFood)) {
        return <ShakePicture pictureSrc={selectedEgg?.petSrc.happy} />;
      } else if (selectedPetFood && !doesPetLikeFood(selectedEgg.type, selectedPetFood)) {
        return <ShakePicture pictureSrc={selectedEgg?.petSrc.sad} />;
      }
    }

    return null;
  };

  return (
    <Box
      display="grid"
      height="100dvh"
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
        {renderShakePicture()}
      </Box>

      {petName !== "" ? (
        <TextBox text={getFoodFeedbackText(petName, selectedEgg, selectedPetFood)} />
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

      <CustomButton marginTop="0.5em" display="flex" backgroundColor={orangeColor} onClick={() => onRestartGame()}>
        Restart Game
      </CustomButton>

      <PetNameModal isOpen={isPetNameModalOpen} onClose={() => setIsPetNameModalOpen(false)} setPetName={setPetName} />
      <FeedPetModal isOpen={isFeedPetModalOpen} onClose={() => setIsFeedPetModalOpen(false)} />
    </Box>
  );
};

export default PetHome;
