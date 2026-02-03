import React, { useEffect } from 'react';
import './NuestraHistoriaPage.css';

const NuestraHistoriaPage = () => {
    // Scroll suave para pestañas flotantes
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Animación de entrada por scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="nuestra-historia-page">

            {/* PESTAÑAS FLOTANTES DE NAVEGACIÓN */}
            <div className="floating-tabs">
                <button onClick={() => scrollToSection('hero')} className="tab-btn" title="Inicio">
                    <i className="fas fa-home"></i>
                </button>
                <button onClick={() => scrollToSection('philosophy')} className="tab-btn" title="Filosofía">
                    <i className="fas fa-book-open"></i>
                </button>
                <button onClick={() => scrollToSection('timeline')} className="tab-btn" title="Historia">
                    <i className="fas fa-history"></i>
                </button>
                <button onClick={() => scrollToSection('pillars')} className="tab-btn" title="Pilares">
                    <i className="fas fa-columns"></i>
                </button>
                <button onClick={() => scrollToSection('awards')} className="tab-btn" title="Logros">
                    <i className="fas fa-trophy"></i>
                </button>
            </div>

            {/* HERO SECTION */}
            <section id="hero" className="hero-section">
                <div className="container hero-content animate-on-scroll">
                    <h1 className="hero-title">Nuestra Historia</h1>
                    <h2 className="hero-subtitle-small">De la Disciplina a la Innovación</h2>

                    <p className="hero-description">
                        La <strong>Unidad Educativa General Eloy Alfaro (UEGEA)</strong> es un referente de transformación educativa en Ecuador.
                        Desde su fundación en 2007 hasta convertirse en una "Unidad Educativa Innovadora" reconocida globalmente,
                        nuestra historia es un testimonio de resiliencia, visión y compromiso con la comunidad rural de Salcedo.
                    </p>

                    <div className="hero-tags">
                        <span className="tag-pill">#InnovaciónRural</span>
                        <span className="tag-pill">#CampusVivo</span>
                        <span className="tag-pill">#PremioNoûs2025</span>
                        <span className="tag-pill">#Sostenibilidad</span>
                    </div>
                     <div className="wavy-separator mx-auto mt-8" style={{ maxWidth: '300px' }}></div>
                </div>
            </section>

            {/* FILOSOFÍA INSTITUCIONAL */}
            <section id="philosophy" className="philosophy-section">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Filosofía Institucional</h2>

                    <div className="philosophy-grid">
                        <div className="philosophy-card animate-on-scroll">
                            <div className="card-icon-placeholder">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <h3>Lema Institucional</h3>
                            <p><strong>"Educación con verdad"</strong></p>
                        </div>

                        <div className="philosophy-card animate-on-scroll">
                            <div className="card-icon-placeholder">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <h3>Visión Fundacional</h3>
                            <p>Forjada por <strong>Aida Marlene Proaño Herrera</strong>, basada en valores éticos, civismo, disciplina y compromiso social.</p>
                        </div>

                        <div className="philosophy-card animate-on-scroll">
                            <div className="card-icon-placeholder">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Visión Innovadora</h3>
                            <p>Liderada por el <strong>Mg. Francisco Javier Paredes</strong>, transformando la disciplina en rigor científico y sostenibilidad aplicada.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LÍNEA DE TIEMPO */}
            <section id="timeline" className="timeline-section">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Línea de Tiempo Institucional</h2>

                    <div className="timeline-container">
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content">
                                <div className="timeline-year">2007</div>
                                <div className="timeline-title">La Fundación</div>
                                <p>La visionaria educadora <strong>Aida Marlene Proaño Herrera</strong> funda la UEGEA en Salcedo. Inicia con 18 estudiantes y un enfoque en la disciplina y valores.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content">
                                <div className="timeline-year">2007-2019</div>
                                <div className="timeline-title">Era Fundacional</div>
                                <p>Consolidación del prestigio local. La institución se destaca por su estructura organizada y formación del carácter (civismo y ética).</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content">
                                <div className="timeline-year">2020</div>
                                <div className="timeline-title">Punto de Inflexión</div>
                                <p>Fallecimiento de la fundadora y crisis global por COVID-19. Asume el Rectorado el <strong>Mg. Francisco Javier Paredes Proaño</strong>. Se plantea el desafío de "transformarse o morir".</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content">
                                <div className="timeline-year">2021-2023</div>
                                <div className="timeline-title">Nace "Aprendiendo para la Vida"</div>
                                <p>Implementación del eje transversal de innovación. Creación de huertos agroecológicos, biodigestores y laboratorios de biotecnología (SUELUX).</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content">
                                <div className="timeline-year">2024-2025</div>
                                <div className="timeline-title">Explosión de Reconocimiento</div>
                                <p>La UEGEA gana premios mundiales: <strong>The Earth Prize (Finalista LatAm)</strong>, <strong>School Enterprise Challenge</strong> y el <strong>Premio Noûs a la Excelencia</strong>.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILARES EDUCATIVOS */}
            <section id="pillars" className="pillars-section">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Pilares del Modelo Educativo</h2>

                    <div className="pillars-grid">
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-heart pillar-icon"></i>
                            <h3>Formación en Valores</h3>
                            <p>Ética, responsabilidad y disciplina como base del carácter.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-users pillar-icon"></i>
                            <h3>Educación Personalizada</h3>
                            <p>Atención individualizada aprovechando nuestra escala (aprox. 250 estudiantes).</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-leaf pillar-icon"></i>
                            <h3>Sostenibilidad Real</h3>
                            <p>Campus Vivo: gestión de residuos, agricultura y economía circular.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-rocket pillar-icon"></i>
                            <h3>Innovación Educativa</h3>
                            <p>Metodologías activas, Aprendizaje-Servicio y Biotecnología escolar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGROS */}
            <section id="awards" className="awards-section">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Logros y Reconocimientos</h2>

                    <div className="awards-grid">
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-trophy"></i>
                            <div>
                                <strong>Premio Noûs 2025</strong>
                                <br/><span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Excelencia Educativa Iberoamericana</span>
                            </div>
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-globe-americas"></i>
                            <div>
                                <strong>The Earth Prize 2025</strong>
                                <br/><span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Top 5 Finalista Centro y Sudamérica (Proyecto SUELUX)</span>
                            </div>
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-award"></i>
                            <div>
                                <strong>School Enterprise Challenge</strong>
                                <br/><span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Ganador Nacional 2024 (Teach A Man To Fish)</span>
                            </div>
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-star"></i>
                            <div>
                                <strong>Premios GOAT 2025</strong>
                                <br/><span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Ganador "Planeta" y "Grand Prix"</span>
                            </div>
                        </div>
                         <div className="award-item animate-on-scroll">
                            <i className="fas fa-certificate"></i>
                            <div>
                                <strong>Unidad Educativa Innovadora</strong>
                                <br/><span style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Ministerio de Educación del Ecuador</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTORIDADES */}
            <section id="authorities" className="authorities-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Liderazgo</h2>
                    <div className="flex justify-center">
                        <div className="philosophy-card animate-on-scroll" style={{ maxWidth: '500px' }}>
                            <div className="card-icon-placeholder">
                                <i className="fas fa-user-tie"></i>
                            </div>
                            <h3>Rectorado</h3>
                            <p><strong>Mg. Francisco Javier Paredes Proaño</strong></p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Líder de la transformación hacia la sostenibilidad y la innovación.</p>
                            <p style={{ fontSize: '0.9rem', marginTop: '1rem' }}><a href="mailto:pachocarabocico@gmail.com" style={{ textDecoration: 'underline' }}>pachocarabocico@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </section>

             {/* UBICACIÓN */}
            <section className="location-section py-16">
                <div className="container text-center">
                    <h2 className="section-title">Nuestra Casa</h2>
                    <p>Barrio Rumipamba Central, Salcedo, Cotopaxi.</p>
                </div>
            </section>
        </div>
    );
};

export default NuestraHistoriaPage;
