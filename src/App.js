import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  CollectionsPage,
  ContactPage,
  LoginPage,
  TopicPage,
} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/collection" element={<CollectionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/topic" element={<TopicPage />} />

        {/* /collection/:uid */}
      </Routes>
    </div>
  );
}

export default App;
