import React from "react";
import { Button, StyleProps } from "@chakra-ui/react";
import { lightBlueColor, whiteColor } from "../colors";

interface CustomButtonProps {
  onButtonClick: () => void;
  text: string;
  backgroundColor?: string;
  margin?: StyleProps["margin"];
  isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onButtonClick, text, margin, backgroundColor, isDisabled }) => {
  return (
    <Button
      backgroundColor={backgroundColor ?? lightBlueColor}
      color={whiteColor}
      fontWeight={700}
      onClick={onButtonClick}
      margin={margin ?? 0}
      isDisabled={isDisabled ?? false}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
