import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import './App.css';

function MainSite() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router basename="/Gallardo-y-Gallardo-Construcciones">
      <div className="App">
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/portafolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
