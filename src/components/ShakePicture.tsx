import { Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React, { useState } from "react";

interface ShakePictureProps {
  clickPicture?: () => void;
  pictureSrc: string;
}
const ShakePicture: React.FC<ShakePictureProps> = ({ clickPicture, pictureSrc }) => {
  const [shouldShake, setShouldShake] = useState(false);

  const clickShakePicture = () => {
    setShouldShake(true);
    if (clickPicture) {
      clickPicture();
    }
    setTimeout(() => {
      setShouldShake(false);
    }, 500);
  };

  return (
    <Image
      src={pictureSrc}
      onClick={() => clickShakePicture()}
      sx={{
        height: "201px",
        width: "150px",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        animation: shouldShake ? `${shakeAnimation} 0.5s cubic-bezier(.36,.07,.19,.97) infinite` : "none",
      }}
    />
  );
};

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
    WebkitTransform: translate3d(-1px, 0, 0);
    Web: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
    WebkitTransform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
    WebkitTransform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
    WebkitTransform: translate3d(4px, 0, 0);
  }
`;

export default ShakePicture;
