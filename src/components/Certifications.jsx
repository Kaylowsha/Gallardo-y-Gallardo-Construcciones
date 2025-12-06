import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications" id="certificaciones">
      <div className="certifications-container">
        <h2 className="section-title">Mercado Público</h2>
        <p className="certifications-subtitle">
          Empresa habilitada y acreditada para participar en licitaciones públicas
        </p>

        {/* Card Principal - Estado HÁBIL */}
        <div className="certification-hero">
          <div className="certification-badge">HÁBIL</div>
          <h3>Dagoberto Gallardo Coli</h3>
          <p className="hero-subtitle">Gallardo y Barría Construcciones</p>
          <div className="hero-details">
            <div className="detail-item">
              <strong>RUT:</strong> 10.164.665-3
            </div>
            <div className="detail-item">
              <strong>Acreditación vigente:</strong> Hasta 17-10-2026
            </div>
            <div className="detail-item">
              <strong>Ubicación:</strong> Punta Arenas, Región de Magallanes
            </div>
          </div>
        </div>

        {/* Grid de Certificaciones Destacadas */}
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-icon">📋</div>
            <h4>Plan de Integridad</h4>
            <p>Cumplimiento total del Plan de Integridad</p>
            <p className="cert-detail">Prácticas éticas y transparentes</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">✅</div>
            <h4>Sin Sanciones</h4>
            <p>Sin condenas ni sanciones vigentes</p>
            <p className="cert-detail">Historial limpio en todos los registros</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">📊</div>
            <h4>Cumplimiento Total</h4>
            <p>Al día con obligaciones tributarias</p>
            <p className="cert-detail">Al día con obligaciones previsionales</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🏢</div>
            <h4>Empresa de Menor Tamaño</h4>
            <p>Clasificada como EMT</p>
            <p className="cert-detail">Beneficios en contratación pública</p>
          </div>
        </div>

        {/* Checklist de Requisitos */}
        <div className="requirements-section">
          <h3>Requisitos Cumplidos</h3>
          <div className="requirements-checklist">
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin documentación falsa</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin suspensión del registro</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin condenas por cohecho o terrorismo</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin liquidación concursal</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin deudas tributarias</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin sentencias informadas por tribunales</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin deudas previsionales</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>No está en listas negras internacionales</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin condenas por incumplimiento contractual</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin condenas por lavado de activos</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin delitos concursales</span>
            </div>
            <div className="requirement-item">
              <span className="check-icon">✓</span>
              <span>Sin eliminación del registro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
