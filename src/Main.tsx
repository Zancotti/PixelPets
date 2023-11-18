import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import SelectEgg from "./components/SelectEgg";

type GameView = "StartScreen" | "SelectEgg";

const Main: React.FC = () => {
  const [gameView, setGameView] = useState<GameView>("StartScreen");

  const onNavigateTo = (view: GameView) => {
    setGameView(view);
  };

  return (
    <Box>
      {gameView === "StartScreen" && <StartScreen onStartGame={() => onNavigateTo("SelectEgg")} />}
      {gameView === "SelectEgg" && <SelectEgg onCancelGame={() => onNavigateTo("StartScreen")} />}
    </Box>
  );
};

export default Main;
