import React from 'react';
import './Portfolio.css';
import logo from '../assets/images/LogoGyG.png';
import C1 from '../assets/images/C1.jpeg';
import C2 from '../assets/images/C2.jpeg';
import C3 from '../assets/images/C3.jpeg';
import C4 from '../assets/images/C4.jpeg';
import Clinica1 from '../assets/images/Clinica1.jpeg';
import Clinica2 from '../assets/images/Clinica 2.jpeg';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <button className="print-button no-print" onClick={() => window.print()}>
        🖨️ Imprimir / Guardar como PDF
      </button>

      {/* Portada */}
      <section className="portfolio-cover">
        <img src={logo} alt="Gallardo y Gallardo Logo" className="portfolio-logo" />
        <h1>Gallardo y Gallardo Construcciones</h1>
        <p className="portfolio-tagline">Excelencia en Construcción y Obras</p>
        <p className="portfolio-location">Punta Arenas, Región de Magallanes</p>
        <div className="cover-footer">
          <p>Portafolio de Servicios 2025</p>
        </div>
      </section>

      {/* Sobre la Empresa */}
      <section className="portfolio-section">
        <h2 className="portfolio-section-title">Sobre Nosotros</h2>
        <div className="portfolio-about">
          <div className="about-content">
            <h3>Gallardo y Gallardo Construcciones</h3>
            <p className="about-text">
              Somos una empresa constructora establecida en Punta Arenas, especializada en
              construcciones civiles, obras de infraestructura y proyectos públicos. Con años
              de experiencia en la Región de Magallanes, nos destacamos por nuestro compromiso
              con la calidad, seguridad y cumplimiento de plazos.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <strong>Especialización:</strong> Construcción Civil e Infraestructura
              </div>
              <div className="highlight-item">
                <strong>Ubicación:</strong> Punta Arenas, Región de Magallanes
              </div>
              <div className="highlight-item">
                <strong>Certificación:</strong> Habilitados en Mercado Público
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificación Mercado Público */}
      <section className="portfolio-section">
        <h2 className="portfolio-section-title">Certificación Mercado Público</h2>
        <div className="portfolio-certification">
          <div className="cert-badge-large">HÁBIL</div>
          <h3>Dagoberto Gallardo Coli</h3>
          <p className="cert-company-name">Gallardo y Barría Construcciones</p>

          <div className="cert-details-grid">
            <div className="cert-detail-box">
              <strong>RUT:</strong>
              <p>10.164.665-3</p>
            </div>
            <div className="cert-detail-box">
              <strong>Acreditación Vigente:</strong>
              <p>Hasta 17-10-2026</p>
            </div>
            <div className="cert-detail-box">
              <strong>Clasificación:</strong>
              <p>Empresa de Menor Tamaño (EMT)</p>
            </div>
          </div>

          <div className="cert-compliance">
            <h4>Cumplimiento de Requisitos</h4>
            <ul className="compliance-list">
              <li>✓ Plan de Integridad - Cumplimiento total</li>
              <li>✓ Sin sanciones ni condenas vigentes</li>
              <li>✓ Al día con obligaciones tributarias</li>
              <li>✓ Al día con obligaciones previsionales</li>
              <li>✓ Sin deudas en registros públicos</li>
              <li>✓ Historial limpio en contratación pública</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="portfolio-section">
        <h2 className="portfolio-section-title">Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-box">
            <div className="service-icon">🏗️</div>
            <h4>Construcción Civil</h4>
            <p>Edificaciones residenciales, comerciales e industriales con los más altos estándares de calidad.</p>
          </div>
          <div className="service-box">
            <div className="service-icon">🛣️</div>
            <h4>Infraestructura</h4>
            <p>Obras viales, pavimentación y mejoramiento de espacios públicos.</p>
          </div>
          <div className="service-box">
            <div className="service-icon">🏢</div>
            <h4>Proyectos Públicos</h4>
            <p>Ejecución de licitaciones públicas con certificación en Mercado Público.</p>
          </div>
          <div className="service-box">
            <div className="service-icon">🔧</div>
            <h4>Remodelación</h4>
            <p>Ampliaciones, remodelaciones y mejoras de infraestructura existente.</p>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="portfolio-section">
        <h2 className="portfolio-section-title">Proyectos Destacados</h2>
        <div className="projects-showcase">
          <div className="project-item">
            <img src={C1} alt="Proyecto de Construcción 1" />
            <div className="project-info">
              <h4>Obras Civiles</h4>
              <p>Proyecto de infraestructura con altos estándares de calidad</p>
            </div>
          </div>
          <div className="project-item">
            <img src={C2} alt="Proyecto de Construcción 2" />
            <div className="project-info">
              <h4>Construcción Estructural</h4>
              <p>Desarrollo de estructuras robustas y seguras</p>
            </div>
          </div>
          <div className="project-item">
            <img src={C3} alt="Proyecto de Construcción 3" />
            <div className="project-info">
              <h4>Proyectos Especializados</h4>
              <p>Soluciones constructivas adaptadas a necesidades específicas</p>
            </div>
          </div>
          <div className="project-item">
            <img src={C4} alt="Proyecto de Construcción 4" />
            <div className="project-info">
              <h4>Infraestructura Urbana</h4>
              <p>Mejoramiento de espacios públicos y viales</p>
            </div>
          </div>
          <div className="project-item">
            <img src={Clinica1} alt="Proyecto Clínica 1" />
            <div className="project-info">
              <h4>Infraestructura de Salud</h4>
              <p>Construcción y acondicionamiento de espacios médicos</p>
            </div>
          </div>
          <div className="project-item">
            <img src={Clinica2} alt="Proyecto Clínica 2" />
            <div className="project-info">
              <h4>Instalaciones Especializadas</h4>
              <p>Espacios técnicos con certificación sanitaria</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="portfolio-section">
        <h2 className="portfolio-section-title">Equipo Directivo</h2>
        <div className="team-portfolio">
          <div className="team-member-box">
            <h3>Dagoberto Gallardo Coli</h3>
            <p className="team-role">Director General y Encargado de Obras</p>
            <div className="team-credentials">
              <p><strong>RUT:</strong> 10.164.665-3</p>
              <p><strong>Experiencia:</strong> Especialista en construcción civil y gestión de proyectos</p>
              <p><strong>Certificaciones:</strong> Acreditado en Mercado Público hasta 2026</p>
            </div>
          </div>
          <div className="team-description">
            <p>
              Nuestro equipo cuenta con profesionales altamente capacitados en todas las áreas
              de la construcción, desde ingeniería y arquitectura hasta ejecución y supervisión
              de obras. Nos enfocamos en la capacitación continua y el cumplimiento de normas
              de seguridad y calidad.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="portfolio-section portfolio-contact">
        <h2 className="portfolio-section-title">Información de Contacto</h2>
        <div className="contact-info-grid">
          <div className="contact-box">
            <div className="contact-icon">📍</div>
            <h4>Ubicación</h4>
            <p>Punta Arenas</p>
            <p>Región de Magallanes y la Antártica Chilena</p>
          </div>
          <div className="contact-box">
            <div className="contact-icon">📱</div>
            <h4>Teléfonos</h4>
            <p>+56 9 4212 2988</p>
            <p>+56 9 8843 1933</p>
          </div>
          <div className="contact-box">
            <div className="contact-icon">📧</div>
            <h4>Correo Electrónico</h4>
            <p>gallardobarriaconstrucciones@gmail.com</p>
          </div>
          <div className="contact-box">
            <div className="contact-icon">🕐</div>
            <h4>Horario de Atención</h4>
            <p>Lunes a Viernes: 9:00 - 18:00</p>
            <p>Sábado: 9:00 - 13:00</p>
          </div>
        </div>
      </section>

      {/* Footer del portafolio */}
      <footer className="portfolio-footer">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>Gallardo y Gallardo Construcciones - Excelencia en Construcción</p>
        <p>Punta Arenas, Región de Magallanes | 2025</p>
      </footer>
    </div>
  );
};

export default Portfolio;
