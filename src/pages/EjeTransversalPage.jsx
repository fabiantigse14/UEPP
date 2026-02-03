import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EjeTransversalPage.css';

const EjeTransversalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="eje-transversal-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-section-title">Aprendiendo para la Vida</h1>
            <p className="hero-section-subtitle">Eje Transversal de Innovación y Sostenibilidad</p>
            <p className="hero-desc">
                Nuestro proyecto pedagógico integra la biotecnología, la agricultura regenerativa y el emprendimiento
                en cada etapa del aprendizaje, transformando a la UEGEA en un "Campus Vivo".
            </p>
            <div className="hero-tags">
              <span className="hero-section-tag">#CampusVivo</span>
              <span className="hero-section-tag">#SUELUX</span>
              <span className="hero-section-tag">#EconomíaCircular</span>
            </div>
             <div className="wavy-separator mx-auto mt-8" style={{ maxWidth: '300px' }}></div>
          </div>
        </div>
      </section>

      {/* CURRICULUM PROGRESSION */}
      <section className="curriculum-section">
        <div className="container">
            <h2 className="section-title">Progresión Curricular</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="info-card">
                    <i className="fas fa-seedling card-icon"></i>
                    <h3 className="card-title">Nivel Inicial (3-5 años)</h3>
                    <p className="card-desc">Asombro y conexión sensorial. Contacto directo con la tierra, identificación de semillas y cuidado básico de plantas.</p>
                </div>
                <div className="info-card">
                    <i className="fas fa-recycle card-icon"></i>
                    <h3 className="card-title">Educación Básica (6-14 años)</h3>
                    <p className="card-desc">Ciclos naturales y responsabilidad. Gestión de residuos, composteras, siembra en huertos y ciclo del agua.</p>
                </div>
                <div className="info-card">
                    <i className="fas fa-microscope card-icon"></i>
                    <h3 className="card-title">Bachillerato (15-17 años)</h3>
                    <p className="card-desc">Ciencia aplicada y emprendimiento. Laboratorio SUELUX, EcoHuerto, análisis de suelos y negocios verdes.</p>
                </div>
            </div>
        </div>
      </section>

      <div className="wavy-separator mx-auto"></div>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="container">
            <h2 className="section-title">Proyectos Insignia</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="project-card">
                    <i className="fas fa-flask card-icon"></i>
                    <h3 className="card-title">Proyecto SUELUX</h3>
                    <p className="card-desc">Biotecnología de regeneración de suelos mediante microorganismos de montaña. Finalista <strong>The Earth Prize 2025</strong>.</p>
                </div>
                <div className="project-card">
                    <i className="fas fa-shopping-basket card-icon"></i>
                    <h3 className="card-title">EcoMercados</h3>
                    <p className="card-desc">Red de economía circular comunitaria. Recolección de residuos orgánicos de mercados locales para compostaje. Ganador <strong>Premios GOAT 2025</strong>.</p>
                </div>
                 <div className="project-card">
                    <i className="fas fa-store card-icon"></i>
                    <h3 className="card-title">EcoHuerto</h3>
                    <p className="card-desc">Emprendimiento social de venta de kits de huertos caseros. Ganador Nacional <strong>School Enterprise Challenge</strong>.</p>
                </div>
                 <div className="project-card">
                    <i className="fas fa-burn card-icon"></i>
                    <h3 className="card-title">Energía Renovable</h3>
                    <p className="card-desc">Biodigestor activo que transforma residuos en biogás y biol, cerrando el ciclo energético del campus.</p>
                </div>
            </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Únete a la Revolución Educativa</h2>
            <p className="text-white mb-8">Sé parte de una comunidad que educa para el futuro.</p>
            <div className="cta-buttons">
              <Link to="/admisiones" className="btn btn-primary" style={{background: 'var(--gold-accent)', color: 'var(--military-green)', border: 'none'}}>Inscripciones</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EjeTransversalPage;
