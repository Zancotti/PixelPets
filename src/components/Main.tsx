import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import SelectEgg from "./SelectEgg";
import PetHome from "./PetHome";

type GameView = "StartScreen" | "SelectEgg" | "PetHome";

const Main: React.FC = () => {
  const [gameView, setGameView] = useState<GameView>("StartScreen");

  const onNavigateTo = (view: GameView) => {
    setGameView(view);
  };

  return (
    <Box backgroundColor="#102152">
      {gameView === "StartScreen" && <StartScreen onStartGame={() => onNavigateTo("SelectEgg")} />}
      {gameView === "SelectEgg" && (
        <SelectEgg onCancelGame={() => onNavigateTo("StartScreen")} onContinue={() => onNavigateTo("PetHome")} />
      )}
      {gameView === "PetHome" && <PetHome />}
    </Box>
  );
};

export default Main;
