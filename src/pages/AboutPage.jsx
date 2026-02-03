import React from 'react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section className="about-hero animate-on-scroll">
        <h1 className="section-title">Nuestra Identidad</h1>
        <span className="section-subtitle">Historia, Misión y Visión</span>
      </section>

      {/* HISTORY SECTION */}
      <section className="container about-content-grid animate-on-scroll">
        <div className="text-block">
          <h3>Nuestra Historia</h3>
          <p>
            La <strong>Unidad Educativa General Eloy Alfaro (UEGEA)</strong> fue fundada en <strong>2007</strong> en el cantón Salcedo por la visionaria Aida Marlene Proaño Herrera.
            Iniciamos con un enfoque disciplinar y cívico que forjó nuestro carácter.
          </p>
          <p>
            Tras el punto de inflexión en 2020, bajo la nueva rectoría, hemos evolucionado hacia un modelo de "Campus Vivo",
            integrando la sostenibilidad, la biotecnología y la innovación tecnológica sin perder nuestros valores fundacionales.
          </p>
        </div>
        <div className="image-block">
          <img src="https://uegea.edu.ec/assets/misionyvision.png" alt="Instalaciones UEGEA" />
        </div>
      </section>

      <div className="wavy-separator mx-auto"></div>

      {/* MISSION & VISION */}
      <section className="mision-vision-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Filosofía Institucional</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <i className="fas fa-bullseye mv-icon"></i>
              <h3>Misión</h3>
              <p>
                Brindar una educación integral, basada en valores, disciplina y compromiso social,
                dirigida a la niñez y juventud rural para garantizar el acceso a oportunidades innovadoras.
              </p>
            </div>
            <div className="mv-card">
              <i className="fas fa-eye mv-icon"></i>
              <h3>Visión</h3>
              <p>
                Ser un referente de educación rural sostenible, fusionando la disciplina con el rigor científico
                y la conciencia ambiental para formar líderes transformadores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            La familia UEGEA se fundamenta en principios que guían nuestro actuar diario.
          </p>
          <div className="values-grid">
            <div className="value-item">Disciplina</div>
            <div className="value-item">Honor</div>
            <div className="value-item">Responsabilidad</div>
            <div className="value-item">Sostenibilidad</div>
            <div className="value-item">Innovación</div>
            <div className="value-item">Resiliencia</div>
          </div>
        </div>
      </section>

      {/* AUTHORITIES SECTION */}
      <section className="authorities-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Liderazgo</h2>
          <div className="auth-grid">
            <div className="auth-card">
              <img src="https://placehold.co/200x200/16A34A/ffffff?text=Rector" alt="Rector" className="auth-img" />
              <h3 className="auth-name">Mg. Francisco Javier Paredes</h3>
              <p className="auth-role">Rector</p>
            </div>
            <div className="auth-card">
              <img src="https://placehold.co/200x200/16A34A/ffffff?text=Vicerrector" alt="Vicerrector" className="auth-img" />
              <h3 className="auth-name">Msc. Autoridad Académica</h3>
              <p className="auth-role">Vicerrectorado</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
