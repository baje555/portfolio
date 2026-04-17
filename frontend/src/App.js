import React from "react";
import "./App.css";
import Navigation from "./components/Portfolio/Navigation";
import Hero from "./components/Portfolio/Hero";
import About from "./components/Portfolio/About";
import Skills from "./components/Portfolio/Skills";
import CTF from "./components/Portfolio/CTF";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Portfolio/Contact";
import Footer from "./components/Portfolio/Footer";
import ParticleBackground from "./components/Portfolio/ParticleBackground";
import CustomCursor from "./components/Portfolio/CustomCursor";

function App() {
  return (
    <div className="App" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Background layer */}
      <ParticleBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navigation />

      {/* Page content */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <CTF />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
