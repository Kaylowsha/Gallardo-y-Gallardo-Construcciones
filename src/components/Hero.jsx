import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import logo from '../assets/images/LogoGyG.png';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-overlay">
        <div className="hero-content">
          <img src={logo} alt="Gallardo y Gallardo Logo" className="hero-logo" />
          <h1 className="hero-title">Gallardo y Gallardo Construcciones</h1>
          <p className="hero-subtitle">Construyendo tus sueños con calidad y compromiso</p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('proyectos')}
            >
              Ver Proyectos
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contacto')}
            >
              Contactar
            </button>
            <button
              className="btn btn-portfolio"
              onClick={() => navigate('/portafolio')}
            >
              📄 Ver Portafolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
