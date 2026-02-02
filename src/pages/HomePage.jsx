import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import FloatingFacebookFeed from '../components/FloatingFacebookFeed';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
            image: "https://uegea.edu.ec/assets/misionyvision.png",
            title: "Educamos para el Futuro",
            subtitle: "Formando líderes con valores y excelencia académica"
        },
        {
            image: "https://uegea.edu.ec/assets/publi1.png",
            title: "Innovación Educativa",
            subtitle: "Tecnología y tradición en armonía"
        },
        {
            image: "https://uegea.edu.ec/assets/btpa.png",
            title: "Excelencia Técnica",
            subtitle: "Preparándote para el mundo profesional"
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
                phoneNumber="+593 99 988 8901"
                accountName="Unidad Educativa General Eloy Alfaro"
                avatar="/UEGEA.png"
                chatMessage="¡Hola! 👋 ¿En qué podemos ayudarte?"
                placeholder="Escribe un mensaje..."
                statusMessage="Normalmente responde en 1 hora"
                bottom={20}
            />
            <FloatingFacebookFeed />
             
            {/* SECCIÓN 1: CARRUSEL (Actualizado) */}
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

            {/* SECCIÓN 2: FRASE + VIDEO */}
            <section className="video-section animate-on-scroll">
                <div className="container">
                    <div className="video-content">
                        <div className="video-player-frame">
                            <div className="video-player-container">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/lHvuRlerKkQ?autoplay=1&vq=hd1080&mute=1&loop=1&playlist=lHvuRlerKkQ"
                                    title="Video UEGEA"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="video-text">
                            <h2 className="video-title">
                                Educamos para el FUTURO con valores y principios
                            </h2>
                            <p className="video-subtitle">#EducaciónDeCalidad #SalcedoCotopaxi</p>
                            <a href="https://uegea.edu.ec/index.php/inicio/index" target="_blank" rel="noopener noreferrer" className="btn-primary">Más información</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: PORQUE ELEGIRNOS */}
            <section id="nosotros" className="choose-us-section animate-on-scroll">
                <div className="container">
                    <h2 className="section-title">¿Por qué elegirnos?</h2>
                    
                    <div className="choose-us-grid">
                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <img src="https://placehold.co/120x120/CCCCCC/666666?text=Valores" alt="Valores" className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Valores y Principios Militares</h3>
                                <p>Fomentamos los valores eternos y el desarrollo integral</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <img src="https://placehold.co/120x120/CCCCCC/666666?text=Educación" alt="Educación" className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Educación Personalizada</h3>
                                <p>Educación individualizada para el talento de cada alumno</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <img src="https://placehold.co/120x120/CCCCCC/666666?text=Sostenibilidad" alt="Sostenibilidad" className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Sostenibilidad</h3>
                                <p>Comprometidos con el medioambiente y desarrollo sostenible</p>
                            </div>
                        </div>

                        <div className="choose-us-card animate-on-scroll">
                            <div className="card-icon-container">
                                <img src="https://placehold.co/120x120/CCCCCC/666666?text=Tecnología" alt="Tecnología" className="card-icon" />
                            </div>
                            <div className="card-content">
                                <h3>Tecnología</h3>
                                <p>Aulas equipadas con la última tecnología educativa</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="https://uegea.edu.ec/nosotros/" target="_blank" rel="noopener noreferrer" className="btn-secondary">Más información sobre nosotros</a>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: NIVELES EDUCATIVOS */}
            <section id="admisiones" className="education-levels-section animate-on-scroll">
                <div className="container">
                    <h2 className="section-title-light">Niveles Educativos</h2>
                    
                    <div className="levels-grid">
                        <div className="level-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/CCCCCC/000000?text=Educación+Inicial" alt="Educación Inicial" />
                            <div className="level-content">
                                <h3>EDUCACIÓN INICIAL</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Inicial I</li>
                                    <li><i className="fas fa-circle"></i> Inicial II</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/CCCCCC/000000?text=Educación+Básica" alt="Educación Básica" />
                            <div className="level-content">
                                <h3>EDUCACIÓN GENERAL BÁSICA</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> 1º a 10º de Básica</li>
                                    <li><i className="fas fa-circle"></i> Formación integral</li>
                                    <li><i className="fas fa-circle"></i> Desarrollo académico</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/logbg.png" alt="BGU" />
                            <div className="level-content">
                                <h3>BACHILLERATO GENERAL UNIFICADO</h3>
                                <ul>
                                    <li><i className="fas fa-circle"></i> 1º año BGU</li>
                                    <li><i className="fas fa-circle"></i> 2º año BGU</li>
                                    <li><i className="fas fa-circle"></i> 3º año BGU</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/logel.png" alt="Electromecánica" />
                            <div className="level-content">
                                <h3>BACHILLERATO TÉCNICO</h3>
                                <p>Electromecánica Automotriz</p>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Formación práctica</li>
                                    <li><i className="fas fa-circle"></i> 1º a 3º año</li>
                                </ul>
                            </div>
                        </div>

                        <div className="level-card animate-on-scroll">
                            <img src="/loga.png" alt="Agropecuaria" />
                            <div className="level-content">
                                <h3>BACHILLERATO TÉCNICO</h3>
                                <p>Producción Agropecuaria Sostenible</p>
                                <ul>
                                    <li><i className="fas fa-circle"></i> Formación práctica</li>
                                    <li><i className="fas fa-circle"></i> 1º a 3º año</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <a href="https://uegea.edu.ec/index.php/inicio/index" target="_blank" rel="noopener noreferrer" className="btn-primary">Ver más información</a>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: CLUBS/ACTIVIDADES EXTRACURRICULARES */}
            <section className="clubs-section animate-on-scroll">
                <div className="container">
                    <div className="text-center">
                        <i className="fas fa-users icon-clubs"></i>
                        <h2 className="section-title">Clubs</h2>
                    </div>

                    <div className="clubs-grid">
                        <div className="club-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/FFFFFF/000000?text=Deportes" alt="Deportes" />
                            <div className="club-content">
                                <h3>Deportes</h3>
                            </div>
                        </div>

                        <div className="club-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/FFFFFF/000000?text=Arte" alt="Arte" />
                            <div className="club-content">
                                <h3>Arte y Cultura</h3>
                            </div>
                        </div>

                        <div className="club-card animate-on-scroll">
                            <img src="https://placehold.co/400x250/FFFFFF/000000?text=Tecnicos" alt="Técnicos" />
                            <div className="club-content">
                                <h3>Técnicos</h3>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3>Descubre nuestros mejores momentos</h3>
                        <a href="https://www.facebook.com/uegea/" target="_blank" rel="noopener noreferrer" className="btn-facebook">Ver Fotos en Facebook</a>
                    </div>

                    <div className="moments-grid">
                        <img src="https://placehold.co/400x250/CCCCCC/000000?text=Momento+1" alt="Momento 1" className="animate-on-scroll" />
                        <img src="https://placehold.co/400x250/CCCCCC/000000?text=Momento+2" alt="Momento 2" className="animate-on-scroll" />
                        <img src="https://placehold.co/400x250/CCCCCC/000000?text=Momento+3" alt="Momento 3" className="animate-on-scroll" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
