import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Portfolio/Navigation";
import Hero from "./components/Portfolio/Hero";
import About from "./components/Portfolio/About";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Portfolio/Contact";
import Footer from "./components/Portfolio/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
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