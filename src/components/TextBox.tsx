import { Box, BoxProps, Text } from "@chakra-ui/react";
import React from "react";

interface TextBoxProps extends BoxProps {
  text: string;
}
const TextBox: React.FC<TextBoxProps> = ({ text }) => {
  return (
    <Box padding="4px">
      <Box
        backgroundColor="#E5E0D7"
        marginBottom={10}
        padding={6}
        sx={{
          boxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px #260e0b`,
          WebkitBoxShadow: `0 0 0 2px #E3DED6,
                    0 0 0 2px #260e0b`,
          border: "2px solid #c8b2a1",
        }}
      >
        <Text textAlign="center" color="#2C130F" fontSize="2.5vh">
          {text}{" "}
        </Text>
      </Box>
    </Box>
  );
};

export default TextBox;
