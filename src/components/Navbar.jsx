import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/images/LogoGyG.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="Gallardo y Gallardo Logo" />
          <span>Gallardo y Gallardo</span>
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('inicio')}>Inicio</a></li>
          <li><a onClick={() => scrollToSection('nosotros')}>Nosotros</a></li>
          <li><a onClick={() => scrollToSection('proyectos')}>Proyectos</a></li>
          <li><a onClick={() => scrollToSection('equipo')}>Equipo</a></li>
          <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
