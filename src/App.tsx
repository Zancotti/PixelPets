import React from "react";
import Main from "./Main";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
};

export default App;
