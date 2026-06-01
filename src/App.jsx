import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Home from "./pages/Home";
import Calories from "./pages/Calories";
import Diet from "./pages/Diet";
import BMI from "./pages/BMI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;