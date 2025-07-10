import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Portfolio/Navigation";
import Hero from "./components/Portfolio/Hero";
import About from "./components/Portfolio/About";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Portfolio/Contact";
import Footer from "./components/Portfolio/Footer";
import ParticleBackground from "./components/Portfolio/ParticleBackground";
import FloatingElements from "./components/Portfolio/FloatingElements";
import CustomCursor from "./components/Portfolio/CustomCursor";

function App() {
  return (
    <div className="App relative">
      <BrowserRouter>
        {/* Special Effects */}
        <ParticleBackground />
        <FloatingElements />
        <CustomCursor />
        
        {/* Main Content */}
        <Navigation />
        <main className="relative z-20">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;