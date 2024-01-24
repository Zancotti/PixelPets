import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import StartScreen from "./StartScreen";
import SelectEgg from "./SelectEgg";
import PetHome from "./PetHome";
import { backgroundColor, orangeColor } from "../colors";
import { usePixelPetsContext } from "../hooks/usePixelPetsContext";

type GameView = "startScreen" | "selectEgg" | "petHome";

const Main: React.FC = () => {
  const [gameView, setGameView] = useState<GameView>("startScreen");
  const { setSelectedEgg, setSelectedPetFood } = usePixelPetsContext();

  const onNavigateTo = (view: GameView) => {
    setGameView(view);
  };
  const restartGame = () => {
    setSelectedEgg(null);
    setSelectedPetFood("");
    setGameView("startScreen");
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
        {gameView === "petHome" && <PetHome onRestartGame={() => restartGame()} />}
      </Box>
    </Box>
  );
};

export default Main;
