import React, { useEffect, useState } from "react";
import { Box, Fade, Text, Image } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { orangeColor, pinkColor, whiteColor } from "../colors";
import { usePixelPetsContext } from "../hooks/usePixelPetsContext";
import { pixelPet } from "../helpers/textHelper";

interface SelectEggProps {
  onCancelGame: () => void;
  onContinue: () => void;
}

export interface Egg {
  eggSrc: string;
  id: number;
  fadeIn: boolean;
  type: pixelPet;
  petSrc: { happy: string; sad: string; neutral: string };
}

const SelectEgg: React.FC<SelectEggProps> = ({ onCancelGame, onContinue }) => {
  const [selectedEggNr, setSelectedEggNr] = useState<null | number>(null);
  const [fadeInEgg1, setFadeInEgg1] = useState(false);
  const [fadeInEgg2, setFadeInEgg2] = useState(false);
  const [fadeInEgg3, setFadeInEgg3] = useState(false);
  const [fadeContent, setFadeContent] = useState(false);
  const { setSelectedEgg } = usePixelPetsContext();

  const eggs: Egg[] = [
    {
      eggSrc: "./pictures/egg.webp",
      id: 1,
      fadeIn: fadeInEgg1,
      type: "cat",
      petSrc: {
        happy: "./pictures/cat_happy.webp",
        sad: "./pictures/cat_sad.webp",
        neutral: "./pictures/cat_neutral.webp",
      },
    },
    {
      eggSrc: "./pictures/egg_2.webp",
      id: 2,
      fadeIn: fadeInEgg2,
      type: "dog",
      petSrc: {
        happy: "./pictures/dog_happy.webp",
        sad: "./pictures/dog_sad.webp",
        neutral: "./pictures/dog_neutral.webp",
      },
    },
    {
      eggSrc: "./pictures/egg_3.webp",
      id: 3,
      fadeIn: fadeInEgg3,
      type: "turtle",
      petSrc: {
        happy: "./pictures/turtle_happy.webp",
        sad: "./pictures/turtle_sad.webp",
        neutral: "./pictures/turtle_neutral.webp",
      },
    },
  ];

  useEffect(() => {
    if (selectedEggNr) setSelectedEgg(eggs[selectedEggNr - 1]);
  }, [selectedEggNr]);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeInEgg1(true);
    }, 200); // starts the fade in after 200ms
    const timer2 = setTimeout(() => {
      setFadeInEgg2(true);
    }, 700); // starts the fade in after 700ms
    const timer3 = setTimeout(() => {
      setFadeInEgg3(true);
    }, 1200); // starts the fade in after 1200

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const setTimeoutOnTransition = () => {
    setFadeContent(true);
    setTimeout(() => {
      onContinue();
    }, 1000);
  };

  return (
    <Box
      display="grid"
      gridTemplateRows="auto auto auto 1fr"
      rowGap="2em"
      padding="2em"
      height={{ base: "100dvh", sm: "100%" }}
      sx={{
        "@keyframes fadeOut": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        animation: fadeContent ? "fadeOut 1s ease-in-out forwards" : "", // 1s duration, ease-in-out timing function
      }}
    >
      <Text color={whiteColor} fontSize="2em" textAlign="center" fontWeight={700}>
        Select your egg
      </Text>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" justifyContent="center" columnGap="1em">
        {eggs.map((egg) => {
          return (
            <Fade key={egg.id} in={egg.fadeIn} transition={{ enter: { duration: 0.5 } }}>
              <Box display="flex" justifyContent="center">
                <Image
                  alt="Image of a pixel pet egg"
                  cursor={"pointer"}
                  onClick={() => setSelectedEggNr(egg.id)}
                  h="100px"
                  src={egg.eggSrc}
                  className={selectedEggNr === egg.id ? "floating" : undefined}
                  sx={{
                    "@keyframes float": {
                      "0%": {
                        transform: "translateY(0)",
                        WebkitTransform: "translateY(0)",
                      },
                      "50%": {
                        transform: "translateY(-10px)",
                        WebkitTransform: "translateY(-10px)",
                      },
                      "100%": {
                        transform: "translateY(0)",
                        WebkitTransform: "translateY(0)",
                      },
                    },
                    animation: selectedEggNr === egg.id ? "float 2s ease-in-out infinite" : "none",
                    WebkitFilter:
                      selectedEggNr === egg.id ? "drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5))" : undefined,
                    filter: selectedEggNr === egg.id ? "drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.5))" : undefined,
                  }}
                />
              </Box>
            </Fade>
          );
        })}
      </Box>
      <Box padding="4px">
        <Text
          p={6}
          color="#2C130F"
          fontSize="1.25em"
          background="#E5E0D7"
          sx={{
            boxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px #260e0b`,
            WebkitBoxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px   #260e0b`,
            border: "2px solid #c8b2a1",
          }}
        >
          The first step on your way to your new pixel pet is to{" "}
          <Text as="span" color={pinkColor} fontWeight={500}>
            pick an egg
          </Text>{" "}
          you wish to care for. Choose wisely!
        </Text>
      </Box>
      <Box display="grid" alignItems="end" gridTemplateColumns="1fr 1fr" columnGap="1em">
        <CustomButton onClick={onCancelGame} backgroundColor={orangeColor}>
          Cancel
        </CustomButton>
        <CustomButton onClick={setTimeoutOnTransition} isDisabled={selectedEggNr === null}>
          Continue
        </CustomButton>
      </Box>
    </Box>
  );
};

export default SelectEgg;
