import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Updated Slides based on "Informe"
    const slides = [
        {
            image: "https://uegea.edu.ec/assets/misionyvision.png",
            title: "Campus Vivo y Sostenible",
            subtitle: "Un laboratorio de innovación educativa en Salcedo"
        },
        {
            image: "https://uegea.edu.ec/assets/publi1.png",
            title: "Disciplina con Propósito",
            subtitle: "18 años formando líderes con carácter, visión y corazón"
        },
        {
            image: "https://uegea.edu.ec/assets/btpa.png",
            title: "Excelencia Técnica",
            subtitle: "Electromecánica y Agropecuaria con tecnología de punta"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-page">
            <FloatingWhatsApp
                phoneNumber="+59332729727"
                accountName="Admisiones UEGEA"
                avatar="/UEGEA.png"
                chatMessage="¡Hola! 👋 ¿Te gustaría conocer nuestra oferta académica y costos?"
                placeholder="Escribe un mensaje..."
                statusMessage="Responde en menos de 1 hora"
                darkMode={false}
                allowEsc
                allowClickAway
                className="floating-wpp"
                styles={{ backgroundColor: '#4b5320', color: '#fff' }}
            />
             
            {/* SECCIÓN 1: CARRUSEL HERO */}
            <section id="inicio" className="carousel-section">
                <div className="carousel-container">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="carousel-bg-image" style={{ backgroundImage: `url(${slide.image})` }}></div>
                            <div className="carousel-overlay-gradient"></div>
                            <div className="carousel-content-wrapper">
                                <h2 className="carousel-title-animated">
                                    {slide.title.split(" ").map((word, i) => (
                                        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{word} </span>
                                    ))}
                                </h2>
                                <p className="carousel-subtitle-animated">{slide.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-controls">
                    <button onClick={prevSlide} className="carousel-nav-btn prev" aria-label="Anterior">
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <div className="carousel-indicators">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Ir a slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="carousel-nav-btn next" aria-label="Siguiente">
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </section>

            <div className="wavy-separator mx-auto" style={{ marginTop: '-20px', zIndex: 10, position: 'relative' }}></div>

            {/* SECCIÓN 2: IDENTIDAD & MISIÓN (NEW) */}
            <section className="identity-section animate-on-scroll py-16">
                <div className="container text-center">
                    <h2 className="section-title">Nuestra Identidad</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                            La <strong>Unidad Educativa General Eloy Alfaro</strong> se define como un "Campus Vivo".
                            Somos más que una escuela; somos un nodo de innovación comunitaria en Salcedo.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 text-left">
                            <div className="choose-us-card p-8">
                                <div className="card-content">
                                    <h3>Misión</h3>
                                    <p>Brindar una educación integral, basada en valores, disciplina y compromiso social, dirigida a niñas, niños y jóvenes de comunidades rurales que históricamente han tenido acceso limitado a oportunidades educativas innovadoras.</p>
                                </div>
                            </div>
                            <div className="choose-us-card p-8">
                                <div className="card-content">
                                    <h3>Visión</h3>
                                    <p>Ser un referente latinoamericano de educación rural sostenible, donde la disciplina tradicional se fusiona con la innovación científica para formar agentes de cambio.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wavy-separator mx-auto"></div>

            {/* SECCIÓN 3: RECONOCIMIENTOS (AWARDS) */}
            <section className="video-section animate-on-scroll">
                <div className="container">
                     <h2 className="section-title">Reconocimiento Internacional</h2>
                     <div className="choose-us-grid" style={{ marginBottom: '4rem' }}>
                        <div className="choose-us-card animate-on-scroll">
                             <div className="card-icon-container">
                                <i className="fas fa-globe-americas card-icon" style={{ fontSize: '3rem' }}></i>
                             </div>
                             <div className="card-content">
                                <h3>The Earth Prize 2025</h3>
                                <p>Top 5 Finalist (Latinoamérica) - Proyecto SUELUX</p>
                             </div>
                        </div>
                        <div className="choose-us-card animate-on-scroll">
                             <div className="card-icon-container">
                                <i className="fas fa-award card-icon" style={{ fontSize: '3rem' }}></i>
                             </div>
                             <div className="card-content">
                                <h3>Premio Noûs 2025</h3>
                                <p>Excelencia Educativa - Ganador Nacional</p>
                             </div>
                        </div>
                        <div className="choose-us-card animate-on-scroll">
                             <div className="card-icon-container">
                                <i className="fas fa-seedling card-icon" style={{ fontSize: '3rem' }}></i>
                             </div>
                             <div className="card-content">
                                <h3>School Enterprise Challenge</h3>
                                <p>Ganador Nacional 2024 - EcoHuerto</p>
                             </div>
                        </div>
                     </div>

                    <div className="video-content">
                        <div className="video-player-frame">
                            <div className="video-player-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/lHvuRlerKkQ?autoplay=0&vq=hd1080"
                                    title="Video UEGEA"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="video-text">
                            <h2 className="video-title">
                                Educamos para la VIDA
                            </h2>
                            <p className="video-subtitle">#Sostenibilidad #Innovación #Cotopaxi</p>
                            <a href="/admisiones" className="btn-primary">Admisiones Abiertas</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wavy-separator mx-auto"></div>

            {/* SECCIÓN 4: PORQUE ELEGIRNOS - 4 PILARES */}
            <section id="nosotros" className="choose-us-section animate-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    <h2 className="section-title">Nuestros Pilares</h2>
                    
                    <div className="choose-us-grid">
                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <i className="fas fa-user-shield card-icon" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="card-content">
                                <h3>Formación en Valores</h3>
                                <p>Disciplina con propósito, liderazgo y civismo.</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <i className="fas fa-chalkboard-teacher card-icon" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="card-content">
                                <h3>Educación Personalizada</h3>
                                <p>Seguimiento individualizado para potenciar el talento.</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <i className="fas fa-leaf card-icon" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="card-content">
                                <h3>Sostenibilidad Real</h3>
                                <p>Gestión de residuos 90%, Biodigestor y Huertos.</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <i className="fas fa-robot card-icon" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="card-content">
                                <h3>Innovación Tecnológica</h3>
                                <p>Laboratorios STEM y Biotecnología (SUELUX).</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="/nosotros" className="btn-secondary">Conoce nuestra Historia</a>
                    </div>
                </div>
            </section>

            <div className="wavy-separator mx-auto"></div>

            {/* SECCIÓN 5: NIVELES EDUCATIVOS */}
            <section id="admisiones" className="education-levels-section animate-on-scroll">
                <div className="container">
                    <h2 className="section-title">Oferta Académica</h2>
                    
                    <div className="levels-grid">
                        <div className="level-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/164529/ffffff?text=Inicial" alt="Educación Inicial" />
                            <div className="level-content">
                                <h3>EDUCACIÓN INICIAL</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Estimulación temprana</li>
                                    <li><i className="fas fa-circle"></i> Conexión con la naturaleza</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/164529/ffffff?text=Básica" alt="Educación Básica" />
                            <div className="level-content">
                                <h3>EDUCACIÓN GENERAL BÁSICA</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> 1º a 10º Grado</li>
                                    <li><i className="fas fa-circle"></i> Ciclos naturales y responsabilidad</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/log2.png" alt="BGU" style={{ objectFit: 'contain', padding: '1rem', background: '#fff' }} />
                            <div className="level-content">
                                <h3>BACHILLERATO EN CIENCIAS</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Preparación universitaria</li>
                                    <li><i className="fas fa-circle"></i> Investigación científica</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/logel.png" alt="Electromecánica" style={{ objectFit: 'contain', padding: '1rem', background: '#fff' }} />
                            <div className="level-content">
                                <h3>TÉCNICO: AUTOMOTRIZ</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Electromecánica Automotriz</li>
                                    <li><i className="fas fa-circle"></i> Mantenimiento y diagnóstico</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/loga.png" alt="Agropecuaria" style={{ objectFit: 'contain', padding: '1rem', background: '#fff' }} />
                            <div className="level-content">
                                <h3>TÉCNICO: AGROPECUARIA</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Producción Sostenible</li>
                                    <li><i className="fas fa-circle"></i> Biotecnología y Emprendimiento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="wavy-separator mx-auto"></div>

            {/* SECCIÓN 6: CLUBS/ACTIVIDADES */}
            <section className="clubs-section animate-on-scroll">
                <div className="container">
                    <div className="text-center">
                        <i className="fas fa-users icon-clubs"></i>
                        <h2 className="section-title">Vida Estudiantil y Clubs</h2>
                    </div>

                    <div className="clubs-grid">
                        <div className="club-card animate-on-scroll">
                            <div className="card-icon-container text-center">
                                <i className="fas fa-car" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="club-content">
                                <h3>Club Automotriz</h3>
                            </div>
                        </div>

                        <div className="club-card animate-on-scroll">
                             <div className="card-icon-container text-center">
                                <i className="fas fa-music" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="club-content">
                                <h3>Música y Danza</h3>
                            </div>
                        </div>

                        <div className="club-card animate-on-scroll">
                             <div className="card-icon-container text-center">
                                <i className="fas fa-language" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="club-content">
                                <h3>Francés y Scout</h3>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="mb-8" style={{ color: 'var(--text-primary)' }}>Descubre nuestros mejores momentos</h3>
                        <a href="https://www.facebook.com/uegea/" target="_blank" rel="noopener noreferrer" className="btn-facebook">
                            <i className="fab fa-facebook-f"></i> Facebook Oficial
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
