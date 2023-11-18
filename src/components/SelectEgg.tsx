import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

interface SelectEggProps {
  onCancelGame: () => void;
}

const SelectEgg: React.FC<SelectEggProps> = ({ onCancelGame }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#102152",
        display: "grid",
        gridTemplateRows: "auto auto 1fr auto",
        rowGap: "1em",
        padding: "2em",
      }}
    >
      <Text color="#fdffff" fontSize="4vh" textAlign="center" fontWeight={700}>
        Select your egg
      </Text>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          justifyContent: "center",
          columnGap: "1em",
        }}
      >
        <Box h="100px" background="#fdffff">
          1
        </Box>
        <Box h="100px" background="#fdffff">
          2
        </Box>
        <Box h="100px" background="#fdffff">
          3
        </Box>
      </Box>
      <Text color="#fdffff" fontSize="3vh">
        The first step on your way to your new pixel pet is to{" "}
        <Text as="span" color="#e42f61" fontWeight={500}>
          pick an egg
        </Text>{" "}
        you wish to care for. Choose wisely!
      </Text>
      <Button onClick={onCancelGame} sx={{ backgroundColor: "#21bab4", color: "#fdffff", fontWeight: "700" }}>
        Cancel
      </Button>
    </Box>
  );
};

export default SelectEgg;
