import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/Main";
import PixelPetsProvider from "./context/PixelPetsContext";

const App = () => {
  return (
    <PixelPetsProvider>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </PixelPetsProvider>
  );
};

export default App;
