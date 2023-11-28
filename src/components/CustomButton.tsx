import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
import { lightBlueColor, whiteColor } from "../colors";

const CustomButton: React.FC<ButtonProps> = ({ children, backgroundColor, ...props }) => {
  return (
    <Button
      backgroundColor={backgroundColor ?? lightBlueColor}
      _hover={{ backgroundColor: lightBlueColor }}
      color={whiteColor}
      fontWeight={700}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
