import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import themes from "./styles/themes";
import Work from "./pages/Work";

function App() {
  const [color, setBackgroundColor] = React.useState(
    themes.backgroundColors.orange
  );

  const handlebackgroundColor = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: color }}>
      <Navbar onChangeColor={handlebackgroundColor} />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
