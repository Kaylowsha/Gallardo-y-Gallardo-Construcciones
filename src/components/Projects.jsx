import React, { useState } from 'react';
import './Projects.css';

// Importar todas las imágenes
import c1 from '../assets/images/C1.jpeg';
import c2 from '../assets/images/C2.jpeg';
import c3 from '../assets/images/C3.jpeg';
import c4 from '../assets/images/C4.jpeg';
import c5 from '../assets/images/C5.jpeg';
import c6 from '../assets/images/C6.jpeg';
import c7 from '../assets/images/C7.jpeg';
import c8 from '../assets/images/C8.jpeg';
import c9 from '../assets/images/C9.jpeg';
import c10 from '../assets/images/C10.jpeg';
import clinica1 from '../assets/images/Clinica1.jpeg';
import clinica2 from '../assets/images/Clinica 2.jpeg';
import clinica3 from '../assets/images/Clinica3.jpeg';

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('todos');

  const projects = [
    { id: 1, image: c1, category: 'construccion', title: 'Proyecto Construcción 1' },
    { id: 2, image: c2, category: 'construccion', title: 'Proyecto Construcción 2' },
    { id: 3, image: c3, category: 'construccion', title: 'Proyecto Construcción 3' },
    { id: 4, image: c4, category: 'construccion', title: 'Proyecto Construcción 4' },
    { id: 5, image: c5, category: 'construccion', title: 'Proyecto Construcción 5' },
    { id: 6, image: c6, category: 'construccion', title: 'Proyecto Construcción 6' },
    { id: 7, image: c7, category: 'construccion', title: 'Proyecto Construcción 7' },
    { id: 8, image: c8, category: 'construccion', title: 'Proyecto Construcción 8' },
    { id: 9, image: c9, category: 'construccion', title: 'Proyecto Construcción 9' },
    { id: 10, image: c10, category: 'construccion', title: 'Proyecto Construcción 10' },
    { id: 11, image: clinica1, category: 'clinica', title: 'Clínica 1' },
    { id: 12, image: clinica2, category: 'clinica', title: 'Clínica 2' },
    { id: 13, image: clinica3, category: 'clinica', title: 'Clínica 3' },
  ];

  const filteredProjects = filter === 'todos'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects" id="proyectos">
      <div className="projects-container">
        <h2 className="section-title">Nuestros Proyectos</h2>
        <p className="projects-subtitle">
          Conoce algunos de los trabajos que hemos realizado con éxito
        </p>

        <div className="projects-filters">
          <button
            className={`filter-btn ${filter === 'todos' ? 'active' : ''}`}
            onClick={() => setFilter('todos')}
          >
            Todos
          </button>
          <button
            className={`filter-btn ${filter === 'construccion' ? 'active' : ''}`}
            onClick={() => setFilter('construccion')}
          >
            Construcciones
          </button>
          <button
            className={`filter-btn ${filter === 'clinica' ? 'active' : ''}`}
            onClick={() => setFilter('clinica')}
          >
            Clínica
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedImage(project)}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <span className="project-title">{project.title}</span>
                  <span className="project-view">Ver detalles</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <p className="lightbox-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
