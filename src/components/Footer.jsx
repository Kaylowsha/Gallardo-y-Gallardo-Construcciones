import React from 'react';
import './Footer.css';
import logo from '../assets/images/LogoGyG.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logo} alt="Gallardo y Gallardo Logo" />
              <h3>Gallardo y Gallardo</h3>
            </div>
            <p className="footer-description">
              Construcciones de calidad con compromiso y experiencia profesional.
            </p>
          </div>

          <div className="footer-section">
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#equipo">Equipo</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Servicios</h4>
            <ul className="footer-links">
              <li>Construcción Residencial</li>
              <li>Construcción Comercial</li>
              <li>Proyectos Institucionales</li>
              <li>Remodelaciones</li>
              <li>Asesoría Técnica</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>📧 contacto@gallardoygallardo.com</li>
              <li>📱 +56 9 XXXX XXXX</li>
              <li>📍 Disponible en tu región</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Gallardo y Gallardo Construcciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
