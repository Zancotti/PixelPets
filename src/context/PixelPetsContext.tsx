import { ReactNode, createContext, useContext, useState } from "react";
import { Egg } from "../components/SelectEgg";

interface PixelPetsContextProps {
  selectedEgg: Egg | null;
  setSelectedEgg: React.Dispatch<React.SetStateAction<Egg | null>>;
}

interface PixelPetsProviderProps {
  children: ReactNode;
}

const pixelPetsContext = createContext<PixelPetsContextProps | undefined>(undefined);

const PixelPetsProvider: React.FC<PixelPetsProviderProps> = ({ children }) => {
  const [selectedEgg, setSelectedEgg] = useState<Egg | null>(null);

  const contextValue: PixelPetsContextProps = {
    selectedEgg,
    setSelectedEgg,
  };

  return <pixelPetsContext.Provider value={contextValue}>{children}</pixelPetsContext.Provider>;
};

export const usePixelPetsContext = () => {
  const context = useContext(pixelPetsContext);
  if (!context) {
    throw new Error("usePixelPetsContext must be used within a PixelPetsProvider");
  }
  return context;
};

export default PixelPetsProvider;
