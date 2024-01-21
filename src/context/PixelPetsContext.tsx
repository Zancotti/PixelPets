import { ReactNode, createContext, useMemo, useState } from "react";
import { Egg } from "../components/SelectEgg";

interface PixelPetsContextProps {
  selectedEgg: Egg | null;
  setSelectedEgg: React.Dispatch<React.SetStateAction<Egg | null>>;
  selectedPetFood: string;
  setSelectedPetFood: React.Dispatch<React.SetStateAction<string>>;
}

interface PixelPetsProviderProps {
  children: ReactNode;
}

// Context for managing selected egg and pet food in the application
export const PixelPetsContext = createContext<PixelPetsContextProps | undefined>(undefined);

// Provider component for PixelPetsContext
const PixelPetsProvider: React.FC<PixelPetsProviderProps> = ({ children }) => {
  const [selectedEgg, setSelectedEgg] = useState<Egg | null>(null);
  const [selectedPetFood, setSelectedPetFood] = useState<string>("");

  // Context value to be provided by the provider wrapped in a useMemo to memoize the value
  const contextValue: PixelPetsContextProps = useMemo(
    () => ({
      selectedEgg,
      setSelectedEgg,
      selectedPetFood,
      setSelectedPetFood,
    }),
    [selectedEgg, setSelectedEgg, selectedPetFood, setSelectedPetFood]
  );

  return <PixelPetsContext.Provider value={contextValue}>{children}</PixelPetsContext.Provider>;
};

export default PixelPetsProvider;
