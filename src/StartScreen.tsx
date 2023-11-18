import React, { useEffect, useState } from "react";
import { Box, Button, Img, Link, Text, Fade } from "@chakra-ui/react";

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
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#102152",
        display: "grid",
        gridTemplateRows: "auto auto auto 1fr auto",
      }}
    >
      <Fade in={fadeInPicture} transition={{ enter: { duration: 1 } }}>
        <Img src="./pictures/PixelPetsBackground.webp" sx={{ width: "100%" }} />
      </Fade>
      <Fade in={fadeInText1} transition={{ enter: { duration: 0.5 } }}>
        <Text
          fontSize="5vh"
          fontWeight={700}
          color="#fdffff
"
          textAlign="center"
        >
          Adopt your
        </Text>
      </Fade>
      <Fade in={fadeInText2} transition={{ enter: { duration: 0.5 } }}>
        <Text
          fontSize="5vh"
          fontWeight={700}
          color="#fdffff
"
          textAlign="center"
        >
          pixel pet today!
        </Text>
      </Fade>
      <Fade in={fadeInText3} transition={{ enter: { duration: 0.5 } }}>
        <Text
          fontSize="2.3vh"
          sx={{ marginTop: "1em" }}
          color="#fdffff
"
          textAlign="center"
        >
          A game by{" "}
          <Link color="#ff7852" isExternal href="https://github.com/Zancotti">
            Sabrina Zancotti
          </Link>
        </Text>
      </Fade>
      <Button
        onClick={onStartGame}
        sx={{ margin: "2em", backgroundColor: "#21bab4", color: "#fdffff", fontWeight: "700" }}
      >
        Start Game
      </Button>
    </Box>
  );
};

export default StartScreen;
