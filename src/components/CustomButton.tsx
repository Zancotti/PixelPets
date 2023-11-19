import React from "react";
import { Button } from "@chakra-ui/react";

interface CustomButtonProps {
  onButtonClick: () => void;
  width?: string;
  text: string;
  backgroundColor?: string;
  margin?: string;
  isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onButtonClick, text, margin, backgroundColor, isDisabled }) => {
  return (
    <Button
      backgroundColor={backgroundColor ? backgroundColor : "#21bab4"}
      color="#fdffff"
      fontWeight={700}
      onClick={onButtonClick}
      margin={margin ? margin : 0}
      isDisabled={isDisabled ? isDisabled : false}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
