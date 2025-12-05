import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="nosotros">
      <div className="about-container">
        <h2 className="section-title">Sobre Nosotros</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Experiencia y Compromiso</h3>
            <p>
              En <strong>Gallardo y Gallardo Construcciones</strong>, nos dedicamos a transformar
              sus proyectos en realidad. Con años de experiencia en el sector de la construcción,
              ofrecemos servicios integrales de alta calidad.
            </p>
            <p>
              Nuestra empresa se especializa en proyectos residenciales, comerciales e
              institucionales, garantizando siempre los más altos estándares de calidad,
              seguridad y cumplimiento de plazos.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h4>Experiencia</h4>
              <p>Años de trayectoria en el sector constructivo</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h4>Calidad</h4>
              <p>Compromiso con los más altos estándares</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h4>Eficiencia</h4>
              <p>Cumplimiento de plazos garantizado</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h4>Confianza</h4>
              <p>Transparencia en cada proyecto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
