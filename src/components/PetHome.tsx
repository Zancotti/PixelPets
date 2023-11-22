import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { usePixelPetsContext } from "../context/PixelPetsContext";

const PetHome: React.FC = () => {
  const { selectedEgg } = usePixelPetsContext();

  return (
    <Box h="100vh">
      <Box display="flex" position="relative" height="50vh">
        <Image src={selectedEgg?.src} position="absolute" top="30%" left="33vw" zIndex="1" />
      </Box>
    </Box>
  );
};

export default PetHome;
