import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

import { HomePage, AboutPage } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
