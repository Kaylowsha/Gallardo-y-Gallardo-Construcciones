import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <section className="team" id="equipo">
      <div className="team-container">
        <h2 className="section-title">Nuestro Equipo</h2>
        <p className="team-subtitle">
          Profesionales comprometidos con la excelencia
        </p>

        <div className="team-content">
          <div className="team-card">
            <div className="team-icon">👷</div>
            <h3>Dagoberto Gallardo</h3>
            <p className="team-role">Encargado de Obras</p>
            <p className="team-description">
              Profesional con amplia experiencia en la dirección y gestión de proyectos
              de construcción. Responsable de la supervisión y coordinación de todas
              nuestras obras.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}CV_Dagoberto_Gallardo.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              Ver Currículum
            </a>
          </div>
        </div>

        <div className="team-values">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-item">
              <span className="value-icon">🎯</span>
              <h4>Profesionalismo</h4>
              <p>Compromiso con la excelencia en cada proyecto</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🔒</span>
              <h4>Seguridad</h4>
              <p>Máxima prioridad en todas nuestras obras</p>
            </div>
            <div className="value-item">
              <span className="value-icon">💡</span>
              <h4>Innovación</h4>
              <p>Uso de las mejores técnicas y materiales</p>
            </div>
            <div className="value-item">
              <span className="value-icon">🌱</span>
              <h4>Sostenibilidad</h4>
              <p>Respeto por el medio ambiente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
