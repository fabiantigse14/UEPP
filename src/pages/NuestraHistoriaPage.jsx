import React, { useState, useEffect } from 'react';
import './NuestraHistoriaPage.css';

const NuestraHistoriaPage = () => {
    const [activeTab, setActiveTab] = useState('timeline');

    // Scroll suave para pestañas flotantes
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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
                <button onClick={() => scrollToSection('hero')} className="tab-btn">
                    <i className="fas fa-home"></i>
                </button>
                <button onClick={() => scrollToSection('philosophy')} className="tab-btn">
                    <i className="fas fa-book-open"></i>
                </button>
                <button onClick={() => scrollToSection('timeline')} className="tab-btn">
                    <i className="fas fa-history"></i>
                </button>
                <button onClick={() => scrollToSection('pillars')} className="tab-btn">
                    <i className="fas fa-columns"></i>
                </button>
                <button onClick={() => scrollToSection('awards')} className="tab-btn">
                    <i className="fas fa-trophy"></i>
                </button>
            </div>

            {/* HERO SECTION */}
            <section id="hero" className="hero-section">
                <div className="hero-background">
                    <div className="hero-image-placeholder">
                        <img src="/log2.png" alt="Historia UEGEA" />
                    </div>
                </div>
                <div className="container hero-content animate-on-scroll">
                    <h1 className="hero-title">Conocenos UEGEA</h1>
                    <h2 className="hero-subtitle-small">Nuestros inicios , Nuestra Vida</h2>

                    <p className="hero-description">
                        La <strong>Unidad Educativa General Eloy Alfaro (UEGEA)</strong> es un caso paradigmático de transformación educativa.
                        Fundada en 2007 por <strong>Aida Marlene Proaño Herrera</strong>, ha evolucionado hasta convertirse en un referente nacional
                        en innovación, sostenibilidad y tecnología, destacando por su proyecto <em>"Aprendiendo para la Vida"</em> y la obtención
                        del <strong>Premio Noûs a la Excelencia Educativa 2025</strong>.
                    </p>

                    <div className="hero-tags">
                        <span className="tag-pill">#InnovaciónEducativa</span>
                        <span className="tag-pill">#AprendiendoParaLaVida</span>
                        <span className="tag-pill">#PremioNoûs2025</span>
                        <span className="tag-pill">#Sostenibilidad</span>
                        <span className="tag-pill">#RealidadVirtual</span>
                    </div>

                    <div className="quote-box">
                        <p>
                            “La historia de UEGEA enseña que la excelencia educativa depende de la visión,
                            el compromiso y la capacidad de innovación de quienes creen en el poder transformador de la educación.”
                        </p>
                    </div>
                </div>
            </section>

            {/* FILOSOFÍA INSTITUCIONAL */}
            <section id="philosophy" className="philosophy-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Filosofía Institucional</h2>

                    <div className="philosophy-grid">
                        <div className="philosophy-card animate-on-scroll" style={{ '--delay': '0.1s' }}>
                            <div className="card-icon-placeholder">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <h3>Filosofía</h3>
                            <p><strong>"Educación con verdad"</strong></p>
                        </div>

                        <div className="philosophy-card animate-on-scroll" style={{ '--delay': '0.3s' }}>
                            <div className="card-icon-placeholder">
                                <i className="fas fa-user-graduate"></i>
                            </div>
                            <h3>Visión Fundacional</h3>
                            <p><strong>Aida Marlene Proaño Herrera</strong>: Formación integral con valores, esfuerzo y sentido social.</p>
                        </div>

                        <div className="philosophy-card animate-on-scroll" style={{ '--delay': '0.5s' }}>
                            <div className="card-icon-placeholder">
                                <i className="fas fa-lightbulb"></i>
                            </div>
                            <h3>Visión Actual</h3>
                            <p><strong>Francisco Javier Paredes Proaño</strong>: Continuar el legado de "educación con verdad", integrando sostenibilidad, tecnología y responsabilidad social.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LÍNEA DE TIEMPO */}
            <section id="timeline" className="timeline-section">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Línea de Tiempo: Hitos Históricos</h2>

                    <div className="timeline-container">
                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content left">
                                <div className="timeline-year">2007</div>
                                <div className="timeline-title">Fundación y Visión</div>
                                <p>La educadora visionaria <strong>Aida Marlene Proaño Herrera</strong> funda la UEGEA. Inicia con 18 estudiantes en Salcedo.</p>
                                <div className="timeline-image-placeholder">
                                    <img src="https://placehold.co/300x200/15202e/ffffff?text=2007+Fundación" alt="Fundación 2007" />
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content right">
                                <div className="timeline-year">2008-2019</div>
                                <div className="timeline-title">Consolidación y Crecimiento</div>
                                <p>Período de organización institucional, identidad basada en valores (disciplina, esfuerzo, respeto).</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content left">
                                <div className="timeline-year">2020</div>
                                <div className="timeline-title">Transición de Liderazgo</div>
                                <p>Fallecimiento de la fundadora. El Mg. <strong>Francisco Javier Paredes Proaño</strong> asume como Rector e inicia "Aprendiendo para la Vida".</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content right">
                                <div className="timeline-year">2022</div>
                                <div className="timeline-title">Reconocimiento Institucional</div>
                                <p>15º aniversario. Recibe reconocimiento de la <strong>Asamblea Nacional del Ecuador</strong>.</p>
                                <div className="timeline-image-placeholder">
                                    <img src="https://placehold.co/300x200/404118/ffffff?text=Asamblea+Nacional" alt="Reconocimiento 2022" />
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content left">
                                <div className="timeline-year">2024</div>
                                <div className="timeline-title">Reconocimiento Nacional e Internacional</div>
                                <p>Proyecto EcoHuerto: <strong>Campeón Nacional</strong> y <strong>1er lugar Global Youth Mobilization</strong>.</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>

                        <div className="timeline-item animate-on-scroll">
                            <div className="timeline-content right">
                                <div className="timeline-year">2025</div>
                                <div className="timeline-title">Año de Excelencia</div>
                                <p><strong>Premio Noûs 2025</strong>, 1er lugar UIDE Challenge y Feria Ambiental Ambato.</p>
                                <div className="timeline-image-placeholder">
                                    <img src="https://placehold.co/300x200/16A34A/ffffff?text=Premio+Noûs+2025" alt="Premio 2025" />
                                </div>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PILARES EDUCATIVOS */}
            <section id="pillars" className="pillars-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Pilares Educativos: "Aprendiendo para la Vida"</h2>

                    <div className="pillars-grid">
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-heart pillar-icon"></i>
                            <h3>Valores</h3>
                            <p>Formación ética y ciudadana, basada en la "educación con verdad".</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-seedling pillar-icon"></i>
                            <h3>Sostenibilidad</h3>
                            <p>Agricultura sostenible y cuidado ambiental.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-vr-cardboard pillar-icon"></i>
                            <h3>Tecnología</h3>
                            <p>Integración de Realidad Virtual (VR) y metaverso educativo.</p>
                        </div>
                        <div className="pillar-card animate-on-scroll">
                            <i className="fas fa-lightbulb pillar-icon"></i>
                            <h3>Emprendimiento</h3>
                            <p>Formación empresarial y habilidades comerciales.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOGROS */}
            <section id="awards" className="awards-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Logros y Reconocimientos</h2>

                    <div className="awards-grid">
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-trophy"></i> Premio Noûs a la Excelencia Educativa 2025
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-medal"></i> 1er Lugar Nacional - UIDE Challenge 2025
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-award"></i> Campeón Nacional - Escuela Emprendedora 2024
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-globe"></i> 1er Lugar Internacional - Global Youth Mobilization
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-leaf"></i> 1er Lugar - Feria Ambiental Ambato 2025
                        </div>
                        <div className="award-item animate-on-scroll">
                            <i className="fas fa-scroll"></i> Reconocimiento Asamblea Nacional (2022)
                        </div>
                    </div>
                </div>
            </section>

            {/* UBICACIÓN */}
            <section className="location-section">
                <div className="container">
                    <h2>Ubicación y Contexto</h2>
                    <div className="location-details">
                        <div className="location-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><strong>Sede:</strong> Rumipamba Central, Río Napo y Río San Miguel, Salcedo</p>
                        </div>
                        <div className="location-item">
                            <i className="fas fa-school"></i>
                            <p><strong>Modalidad:</strong> Institución Particular</p>
                        </div>
                        <div className="location-item">
                            <i className="fas fa-clock"></i>
                            <p><strong>Jornada:</strong> Matutina presencial</p>
                        </div>
                        <div className="location-item">
                            <i className="fas fa-users"></i>
                            <p><strong>Capacidad:</strong> 200 estudiantes</p>
                        </div>
                    </div>

                    <div className="map-placeholder">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.349057865141!2d-78.837!3d-1.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDInNDAnUyA3OMKwNTAnVy!5e0!3m2!1ses!2sec!4v1234567890"
                            width="100%"
                            height="300"
                            style={{ border: 0, borderRadius: '1rem', marginTop: '1.5rem' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NuestraHistoriaPage;