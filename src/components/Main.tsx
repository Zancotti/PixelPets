import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import SelectEgg from "./SelectEgg";
import PetHome from "./PetHome";
import { backgroundColor } from "../colors";

type gameView = "startScreen" | "selectEgg" | "petHome";

const Main: React.FC = () => {
  const [gameView, setGameView] = useState<gameView>("startScreen");

  const onNavigateTo = (view: gameView) => {
    setGameView(view);
  };

  return (
    <Box backgroundColor={backgroundColor}>
      {gameView === "startScreen" && <StartScreen onStartGame={() => onNavigateTo("selectEgg")} />}
      {gameView === "selectEgg" && (
        <SelectEgg onCancelGame={() => onNavigateTo("startScreen")} onContinue={() => onNavigateTo("petHome")} />
      )}
      {gameView === "petHome" && <PetHome />}
    </Box>
  );
};

export default Main;
