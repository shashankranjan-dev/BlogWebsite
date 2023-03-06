import React from "react";
import Home from "../../components/Home/Home";
import Hero from "../../components/Hero/Hero";
import Editor from "../../components/Editor/Editor";
import Blog from "../../components/Blog/Blog";
import Spotlight from "../../components/Spotlight/Spotlight";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Home />
      <Editor />
      <Hero />
      <Blog />
      <Spotlight />
      <Footer />
    </div>
  );
}

export default HomePage;
