import React, { useEffect, useState } from "react";
import { Box, Fade, Text, Image } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

interface SelectEggProps {
  onCancelGame: () => void;
  onContinue: () => void;
}

interface Egg {
  src: string;
  id: number;
  fadeIn: boolean;
}

const SelectEgg: React.FC<SelectEggProps> = ({ onCancelGame, onContinue }) => {
  const [selectedEgg, setSelectedEgg] = useState<null | number>(null);
  const [fadeInEgg1, setFadeInEgg1] = useState(false);
  const [fadeInEgg2, setFadeInEgg2] = useState(false);
  const [fadeInEgg3, setFadeInEgg3] = useState(false);
  const [fadeContent, setFadeContent] = useState(false);

  const eggs: Egg[] = [
    { src: "./pictures/egg.webp", id: 1, fadeIn: fadeInEgg1 },
    { src: "./pictures/egg.webp", id: 2, fadeIn: fadeInEgg2 },
    { src: "./pictures/egg.webp", id: 3, fadeIn: fadeInEgg3 },
  ];

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
      h="100vh"
      display="grid"
      gridTemplateRows="auto auto 1fr auto"
      rowGap="2em"
      padding="2em"
      sx={{
        "@keyframes fadeOut": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        animation: fadeContent ? "fadeOut 1s ease-in-out forwards" : "", // 1s duration, ease-in-out timing function
      }}
    >
      <Text color="#fdffff" fontSize="4vh" textAlign="center" fontWeight={700}>
        Select your egg
      </Text>
      <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" justifyContent="center" columnGap="1em">
        {eggs.map((egg) => {
          return (
            <Fade key={egg.id} in={egg.fadeIn} transition={{ enter: { duration: 0.5 } }}>
              <Image
                onClick={() => setSelectedEgg(egg.id)}
                h="100px"
                src={egg.src}
                className={selectedEgg === egg.id ? "floating" : ""}
                sx={{
                  webkitFilter: selectedEgg === egg.id ? "drop-shadow(12px 12px 7px rgba(255, 255, 255, 0.5))" : "",
                  filter: selectedEgg === egg.id ? "drop-shadow(0px 0px 7px rgba(255, 255, 255, 0.5))" : "",

                  "@keyframes float": {
                    "0%": {
                      transform: "translateY(0)",
                    },
                    "50%": {
                      transform: "translateY(-10px)",
                    },
                    "100%": {
                      transform: "translateY(0)",
                    },
                  },
                  animation: selectedEgg === egg.id ? "float 2s ease-in-out infinite" : "none",
                }}
              />
            </Fade>
          );
        })}
      </Box>
      <Text color="#fdffff" fontSize="3vh">
        The first step on your way to your new pixel pet is to{" "}
        <Text as="span" color="#e42f61" fontWeight={500}>
          pick an egg
        </Text>{" "}
        you wish to care for. Choose wisely!
      </Text>
      <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="1em">
        <CustomButton onButtonClick={onCancelGame} text="Cancel" backgroundColor="#ff7852" />
        <CustomButton onButtonClick={setTimeoutOnTransition} text="Continue" isDisabled={selectedEgg === null} />
      </Box>
    </Box>
  );
};

export default SelectEgg;
