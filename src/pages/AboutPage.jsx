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
            La Unidad Educativa General Eloy Alfaro (UEGEA) nació en 2020, fruto de la transformación
            del Centro de Educación Inicial "Colorines", fundado en 2006. Con 18 años de experiencia
            educativa en el cantón Salcedo, hemos evolucionado para responder a los desafíos del mundo moderno.
          </p>
          <p>
            Nos hemos consolidado como un referente de calidad y calidez, integrando la innovación
            tecnológica con una sólida formación en valores. Nuestro compromiso es formar líderes
            disciplinados, con conciencia ambiental y capacidad crítica.
          </p>
        </div>
        <div className="image-block">
          {/* Placeholder for School Building Image */}
          <img src="https://uegea.edu.ec/assets/misionyvision.png" alt="Instalaciones UEGEA" />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mision-vision-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Filosofía Institucional</h2>
          <div className="mv-grid">
            <div className="mv-card">
              <i className="fas fa-bullseye mv-icon"></i>
              <h3>Misión</h3>
              <p>
                Formar niños y jóvenes con pensamiento crítico, reflexivo y valores sólidos.
                Ofrecemos una educación de calidad y calidez, promoviendo el desarrollo de
                potencialidades individuales y el cuidado del medio ambiente, para entregar
                a la sociedad seres humanos capaces de transformar su entorno.
              </p>
            </div>
            <div className="mv-card">
              <i className="fas fa-eye mv-icon"></i>
              <h3>Visión</h3>
              <p>
                Ser una institución educativa referente a nivel nacional, reconocida por su
                excelencia académica, innovación pedagógica y formación integral. Lideramos
                procesos de cambio educativo con estándares de calidad, tecnología de punta
                y un profundo compromiso social y ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: '#cbd5e1' }}>
            La familia UEGEA se fundamenta en principios que guían nuestro actuar diario dentro y fuera de las aulas.
          </p>
          <div className="values-grid">
            <div className="value-item">Respeto</div>
            <div className="value-item">Honradez</div>
            <div className="value-item">Responsabilidad</div>
            <div className="value-item">Solidaridad</div>
            <div className="value-item">Justicia</div>
            <div className="value-item">Disciplina</div>
            <div className="value-item">Patriotismo</div>
          </div>
        </div>
      </section>

      {/* AUTHORITIES SECTION */}
      <section className="authorities-section animate-on-scroll">
        <div className="container">
          <h2 className="section-title">Autoridades</h2>
          <div className="auth-grid">
            <div className="auth-card">
              <img src="https://placehold.co/200x200/1fd655/ffffff?text=Rectorado" alt="Rector" className="auth-img" />
              <h3 className="auth-name">Msc. Nombre Rector</h3>
              <p className="auth-role">Rector</p>
            </div>
            <div className="auth-card">
              <img src="https://placehold.co/200x200/1fd655/ffffff?text=Vicerrectorado" alt="Vicerrector" className="auth-img" />
              <h3 className="auth-name">Msc. Nombre Vicerrector</h3>
              <p className="auth-role">Vicerrector Académico</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
