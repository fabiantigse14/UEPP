// EjeTransversalPage.jsx - VERSIÓN FINAL PREMIUM: Fondos, Tarjetas, Imágenes, Colores, Responsive
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EjeTransversalPage.css';

const EjeTransversalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const valores = [
    { icon: "fas fa-shield-alt", title: "Disciplina", desc: "Hábitos de orden, responsabilidad y perseverancia." },
    { icon: "fas fa-handshake", title: "Respeto", desc: "Convivencia armónica con compañeros y docentes." },
    { icon: "fas fa-flag", title: "Lealtad", desc: "A la institución, valores patrios y principios ciudadanos." },
    { icon: "fas fa-medal", title: "Honor", desc: "Integridad personal y búsqueda constante de excelencia." },
    { icon: "fas fa-fist-raised", title: "Coraje", desc: "Valentía para enfrentar desafíos académicos y personales." },
    { icon: "fas fa-hands-helping", title: "Servicio", desc: "Espíritu altruista y compromiso con la comunidad." }
  ];

  const programas = [
    { title: "Clubs Rotativos", icon: "fas fa-sync-alt", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", benefits: ["Habilidades múltiples", "Liderazgo", "Trabajo en equipo", "Exploración de intereses"] },
    { title: "Idiomas por Niveles", icon: "fas fa-language", img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", benefits: ["Inglés desde inicial", "Certificaciones internacionales", "Intercambios culturales", "Clases prácticas"] },
    { title: "Formación en Valores", icon: "fas fa-heart", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", benefits: ["Ética aplicada", "Ciudadanía activa", "Responsabilidad social", "Valores permanentes"] },
    { title: "Innovación y Sostenibilidad", icon: "fas fa-seedling", img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", benefits: ["Pensamiento crítico", "Creatividad", "Conciencia ambiental", "Tecnología sostenible"] }
  ];

  const bachilleratos = [
    { name: "Bachillerato General Unificado (BGU)", type: "Académico", specialties: ["Ciencias", "Técnico", "Humanidades"], img: "https://images.unsplash.com/photo-1523050858586-3d433d341f25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Bachillerato Técnico - Electromecánica Automotriz", type: "Técnico", specialties: ["Electromecánica", "Sistemas Vehiculares", "Diagnóstico"], img: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Bachillerato Técnico - Producción Agropecuaria Sostenible", type: "Técnico", specialties: ["Producción Agrícola", "Ganadería", "Sostenibilidad"], img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  const metodologia = [
    { step: "01", title: "Educación Personalizada", desc: "Diagnóstico individual y plan personalizado", icon: "fas fa-user-graduate", color: "#3b82f6" },
    { step: "02", title: "Aprendizaje Activo", desc: "Proyectos prácticos e investigación guiada", icon: "fas fa-lightbulb", color: "#8b5cf6" },
    { step: "03", title: "Formación Integral", desc: "Desarrollo cognitivo, físico y emocional", icon: "fas fa-users-cog", color: "#10b981" }
  ];

  const tecnologia = [
    { title: "Laboratorios de Biotecnología", icon: "fas fa-flask", tech: ["Hidropónicos", "Análisis de suelos", "Biotecnología"], img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Tecnología Agrícola", icon: "fas fa-tractor", tech: ["Drones", "Sensores IoT", "Automatización"], img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { title: "Centro de Innovación", icon: "fas fa-cogs", tech: ["Robótica", "Programación", "Maker Space"], img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
  ];

  return (
    <>
      {/* HERO - Fondo sólido */}
      <section className="py-16 hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-section-title">
              Ejes Transversales
            </h1>
            <p className="hero-section-subtitle">Filosofía Educativa Integral</p>
            <p className="hero-desc">
              Formación basada en tres pilares: <strong>valores militares</strong>, <strong>excelencia académica</strong> y <strong>formación integral</strong>.
            </p>
            <blockquote className="hero-section-quote">
              “Formamos líderes integrales con valores eternos y principios militares que perduran toda la vida”
            </blockquote>
            <div className="hero-tags">
              {["#ValoresMilitares", "#EducaciónIntegral", "#FormaciónCompleta", "#ExcelenciaAcadémica"].map((tag, i) => (
                <span key={i} className="hero-section-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES - Fondo gris claro */}
      <section className="py-16 valores-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title valores-section-title">Valores y Principios Militares</h2>
            <p className="section-desc">Fortalecemos el carácter con disciplina y honor</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, i) => (
              <div key={i} className="valor-card bg-white/95 backdrop-blur-sm" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="valor-icon bg-gradient-to-br from-green-600 to-emerald-600">
                  <i className={valor.icon}></i>
                </div>
                <h3 className="valor-title text-gray-800">{valor.title}</h3>
                <p className="valor-desc">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCACIÓN INTEGRAL - Fondo azul claro */}
      <section className="py-16 educacion-integral-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title educacion-integral-section-title">Educación Integral</h2>
            <p className="section-desc">Desarrollo armonioso del ser humano</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programas.map((prog, i) => (
              <div key={i} className="programa-card bg-white/95 backdrop-blur-sm" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="programa-img-wrapper">
                  <img src={prog.img} alt={prog.title} className="programa-img" />
                  <div className="programa-icon-overlay">
                    <i className={prog.icon}></i>
                  </div>
                </div>
                <div className="programa-content">
                  <h3 className="programa-title">{prog.title}</h3>
                  <ul className="programa-benefits">
                    {prog.benefits.map((ben, j) => (
                      <li key={j}><i className="fas fa-check text-green-600"></i> {ben}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACHILLERATOS - Fondo verde militar */}
      <section className="py-16 bachilleratos-section">
        <div className="container">
          <div className="section-header text-white">
            <h2 className="section-title bachilleratos-section-title">Bachilleratos con Visión de Futuro</h2>
            <p className="section-desc">Opciones especializadas para el siglo XXI</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bachilleratos.map((bach, i) => (
              <div key={i} className="bach-card bg-white/10 backdrop-blur-md border border-white/20">
                <img src={bach.img} alt={bach.name} className="bach-img" />
                <div className="bach-content p-6">
                  <span className="bach-type text-green-200">{bach.type}</span>
                  <h3 className="bach-title text-white">{bach.name}</h3>
                  <div className="bach-specialties">
                    {bach.specialties.map((esp, j) => (
                      <span key={j} className="specialty-tag bg-white/20 text-white border border-white/30">{esp}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGÍA - Fondo morado claro */}
      <section className="py-16 metodologia-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title metodologia-section-title">Metodología Educativa</h2>
            <p className="section-desc">El estudiante como protagonista de su formación</p>
          </div>
          <div className="metodologia-grid">
            {metodologia.map((met, i) => (
              <div key={i} className="met-card bg-white/95 backdrop-blur-sm">
                <div className="met-number" style={{ color: met.color }}>{met.step}</div>
                <div className="met-icon" style={{ color: met.color }}>
                  <i className={met.icon}></i>
                </div>
                <h3 className="met-title">{met.title}</h3>
                <p className="met-desc">{met.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA - Fondo gris azulado */}
      <section className="py-16 tecnologia-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title tecnologia-section-title">Compromiso Ambiental y Tecnológico</h2>
            <p className="section-desc">Preparados para el futuro sostenible</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {tecnologia.map((tec, i) => (
              <div key={i} className="tec-card bg-white/95 backdrop-blur-sm">
                <div className="tec-img-wrapper">
                  <img src={tec.img} alt={tec.title} className="tec-img" />
                </div>
                <div className="tec-content p-6">
                  <div className="tec-icon bg-gradient-to-br from-green-600 to-emerald-600">
                    <i className={tec.icon}></i>
                  </div>
                  <h3 className="tec-title">{tec.title}</h3>
                  <div className="tec-tech">
                    {tec.tech.map((t, j) => (
                      <span key={j} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIO - Fondo dorado */}
      <section className="py-16 premio-section">
        <div className="container">
          <div className="award-content bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="award-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <h2 className="award-title premio-section-title">Premio Noûs a la Excelencia Educativa 2025</h2>
            <p className="award-desc">
              Reconocimiento nacional que confirma nuestro liderazgo en educación de calidad, innovación pedagógica y formación integral.
            </p>
          </div>
        </div>
      </section>

      {/* CTA - Fondo oscuro */}
      <section className="py-16 cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title cta-section-title">¡Forma parte de la excelencia!</h2>
            <p className="cta-desc">Inscribe a tu hijo en la institución que forma líderes del mañana</p>
            <div className="cta-buttons">
              <Link to="/admisiones" className="btn btn-primary">Inscribirse Ahora</Link>
              <Link to="/contacto" className="btn btn-secondary">Solicitar Información</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EjeTransversalPage;