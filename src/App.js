import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./components/styles/FogOverlay.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="fog"></div>
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
