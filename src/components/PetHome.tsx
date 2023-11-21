import { Box, Image } from "@chakra-ui/react";
import React from "react";

const PetHome: React.FC = () => {
  return (
    <Box h="100vh">
      <Box display="flex" position="relative" height="50vh">
        <Image
          src="./pictures/hatchingBackground.webp"
          alt="Picture of Pixel Pet egg hatching place"
          backgroundSize="contain"
          width="100%"
        />
        <Image src="./pictures/egg.webp" position="absolute" top="30%" left="33vw" zIndex="1" />
      </Box>
    </Box>
  );
};

export default PetHome;
