import React, { useEffect, useState } from "react";
import { Box, Img, Link, Text, Fade } from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { orangeColor, whiteColor } from "../colors";

interface StartScreenProps {
  onStartGame: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartGame }) => {
  const [fadeInPicture, setFadeInPicture] = useState(false);
  const [fadeInText1, setFadeInText1] = useState(false);
  const [fadeInText2, setFadeInText2] = useState(false);
  const [fadeInText3, setFadeInText3] = useState(false);

  useEffect(() => {
    const pictureTimer = setTimeout(() => {
      setFadeInPicture(true);
    }, 200); // starts the fade in after 200ms
    const timer1 = setTimeout(() => {
      setFadeInText1(true);
    }, 1000); // starts the fade in after 1000ms
    const timer2 = setTimeout(() => {
      setFadeInText2(true);
    }, 1500); // starts the fade in after 1500ms
    const timer3 = setTimeout(() => {
      setFadeInText3(true);
    }, 2000); // starts the fade in after 2000

    return () => {
      clearTimeout(pictureTimer);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <Box height={{ base: "100dvh", sm: "100%" }} display="grid" gridTemplateRows="auto auto auto 1fr auto">
      <Fade in={fadeInPicture} transition={{ enter: { duration: 1 } }}>
        <Img src="./pictures/pixelPetsBackground.webp" sx={{ width: "100%" }} />
      </Fade>
      <Fade in={fadeInText1} transition={{ enter: { duration: 0.5 } }}>
        <Text fontSize="2.5em" fontWeight={700} color={whiteColor} textAlign="center">
          Adopt your
        </Text>
      </Fade>
      <Fade in={fadeInText2} transition={{ enter: { duration: 0.5 } }}>
        <Text fontSize="2.5em" fontWeight={700} color={whiteColor} textAlign="center">
          pixel pet today!
        </Text>
      </Fade>
      <Fade in={fadeInText3} transition={{ enter: { duration: 0.5 } }}>
        <Text fontSize="1em" sx={{ marginTop: "1em" }} color={whiteColor} textAlign="center">
          A game by{" "}
          <Link
            color={orangeColor}
            rel="noopener noreferrer"
            isExternal
            href="https://github.com/Zancotti"
            aria-label="Visit Sabrina Zancotti's GitHub profile"
          >
            Sabrina Zancotti
          </Link>
        </Text>
      </Fade>
      <CustomButton onClick={onStartGame} margin="2em" aria-label="Start Game">
        Start Game
      </CustomButton>
    </Box>
  );
};

export default StartScreen;
