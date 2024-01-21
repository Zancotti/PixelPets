import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import SelectEgg from "./SelectEgg";
import PetHome from "./PetHome";
import { backgroundColor, orangeColor } from "../colors";

type GameView = "startScreen" | "selectEgg" | "petHome";

const Main: React.FC = () => {
  const [gameView, setGameView] = useState<GameView>("startScreen");

  const onNavigateTo = (view: GameView) => {
    setGameView(view);
  };

  return (
    <Box backgroundColor={backgroundColor} h={"100vh"} display="flex" alignItems="center" justifyContent="center">
      <Box
        width={{
          sm: `375px`,
        }}
        height={{ sm: "675px", base: "100%" }}
        border={{
          sm: `1px solid ${orangeColor}`,
        }}
      >
        {gameView === "startScreen" && <StartScreen onStartGame={() => onNavigateTo("selectEgg")} />}
        {gameView === "selectEgg" && (
          <SelectEgg onCancelGame={() => onNavigateTo("startScreen")} onContinue={() => onNavigateTo("petHome")} />
        )}
        {gameView === "petHome" && <PetHome />}
      </Box>
    </Box>
  );
};

export default Main;
