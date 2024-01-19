import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

interface FoodItemRowProps extends BoxProps {
  text: string;
}
const FoodItemRow: React.FC<FoodItemRowProps> = ({ text }) => {
  return (
    <Box
      backgroundColor="#E5E0D7"
      marginBottom={10}
      sx={{
        boxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px #260e0b`,
        border: "2px solid #c8b2a1",
      }}
    >
      <Text textAlign="center" color="#2C130F" fontSize="3vh">
        {text}{" "}
      </Text>
    </Box>
  );
};

export default FoodItemRow;
