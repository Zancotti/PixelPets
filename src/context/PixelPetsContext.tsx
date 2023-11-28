import { ReactNode, createContext, useState } from "react";
import { Egg } from "../components/SelectEgg";

interface PixelPetsContextProps {
  selectedEgg: Egg | null;
  setSelectedEgg: React.Dispatch<React.SetStateAction<Egg | null>>;
}

interface PixelPetsProviderProps {
  children: ReactNode;
}

export const PixelPetsContext = createContext<PixelPetsContextProps | undefined>(undefined);

const PixelPetsProvider: React.FC<PixelPetsProviderProps> = ({ children }) => {
  const [selectedEgg, setSelectedEgg] = useState<Egg | null>(null);

  const contextValue: PixelPetsContextProps = {
    selectedEgg,
    setSelectedEgg,
  };

  return <PixelPetsContext.Provider value={contextValue}>{children}</PixelPetsContext.Provider>;
};

export default PixelPetsProvider;
