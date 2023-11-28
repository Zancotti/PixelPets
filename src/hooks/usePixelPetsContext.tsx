import { useContext } from "react";
import { PixelPetsContext } from "../context/PixelPetsContext";

export const usePixelPetsContext = () => {
  const context = useContext(PixelPetsContext);
  if (!context) {
    throw new Error("usePixelPetsContext must be used within a PixelPetsProvider");
  }
  return context;
};
