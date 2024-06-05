import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    );
  };

  return (
    <>
      <ColorModeSwitcher />
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;