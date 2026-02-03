import React, { useState, useEffect, useRef } from 'react';
import './ClubsPage.css';

const ClubsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const statsRef = useRef(null);

    // Estadísticas animadas
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.stat-number').forEach(stat => {
                        const target = parseInt(stat.getAttribute('data-target'));
                        let count = 0;
                        const increment = target / 100;
                        const timer = setInterval(() => {
                            count += increment;
                            if (count >= target) {
                                stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.ceil(count) + (stat.textContent.includes('+') ? '+' : '');
                            }
                        }, 20);
                    });
                }
            });
        }, { threshold: 0.5 });

        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    // Datos de clubs - UPDATED
    const clubs = [
        // TECNOLÓGICOS / TÉCNICOS
        { id: 1, name: 'Club Automotriz', category: 'tecnicos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Automotriz', desc: 'Mantenimiento de motores y sistemas de transmisión. Vinculado al Bachillerato Técnico.' },
        { id: 2, name: 'EcoHuerto', category: 'tecnicos', img: 'https://placehold.co/500x350/803a08/ffffff?text=EcoHuerto', desc: 'Agroecología, compostaje y emprendimiento verde.' },

        // CULTURALES / ARTÍSTICOS
        { id: 3, name: 'Danza Folclórica', category: 'culturales', img: 'https://placehold.co/500x350/15202e/86efac?text=Danza', desc: 'Rescate de raíces culturales y presentaciones comunitarias.' },
        { id: 4, name: 'Música y Canto', category: 'culturales', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Música', desc: 'Interpretación instrumental, vocalización y disciplina auditiva.' },
        { id: 5, name: 'Club de Francés', category: 'culturales', img: 'https://placehold.co/500x350/0055a4/ffffff?text=Francés', desc: 'Formación de ciudadanos globales. Tercera lengua institucional.' },
        { id: 6, name: 'Bastoneras', category: 'culturales', img: 'https://placehold.co/500x350/d4af37/000000?text=Bastoneras', desc: 'Coordinación, ritmo y civismo en desfiles.' },

        // DEPORTIVOS
        { id: 7, name: 'Basketball', category: 'deportivos', img: 'https://placehold.co/500x350/803a08/ffffff?text=Basketball', desc: 'Estrategia, salud física y trabajo en equipo.' },
        { id: 8, name: 'Fútbol', category: 'deportivos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Fútbol', desc: 'Entrenamiento técnico y competiciones interescolares.' },
    ];

    const categories = [
        { id: 'all', name: 'Todos', icon: 'fas fa-th-large' },
        { id: 'tecnicos', name: 'Técnicos', icon: 'fas fa-tools' },
        { id: 'culturales', name: 'Culturales', icon: 'fas fa-palette' },
        { id: 'deportivos', name: 'Deportivos', icon: 'fas fa-futbol' }
    ];

    const filteredClubs = activeCategory === 'all'
        ? clubs
        : clubs.filter(club => club.category === activeCategory);

    return (
        <div className="clubs-page">
            {/* HERO */}
            <section id="hero" className="hero-section">
                <div className="container hero-content">
                    <h1 className="hero-title">Clubs y Vida Estudiantil</h1>
                    <p className="hero-description">
                        Complementamos la excelencia académica con el desarrollo de talentos.
                        Desde la mecánica automotriz hasta la expresión artística, hay un lugar para ti.
                    </p>
                    <div className="hero-tags">
                        <span className="tag-pill">#TalentoUEGEA</span>
                        <span className="tag-pill">#ArteYDeporte</span>
                        <span className="tag-pill">#Técnica</span>
                    </div>
                     <div className="wavy-separator mx-auto mt-8" style={{ maxWidth: '300px' }}></div>

                    {/* ESTADÍSTICAS ANIMADAS */}
                    <div className="stats-container" ref={statsRef}>
                        <div className="stat-item">
                            <div className="stat-number" data-target="10">0</div>
                            <p>Clubs Activos</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" data-target="100">0%</div>
                            <p>Participación</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" data-target="3">0</div>
                            <p>Idiomas</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTROS POR CATEGORÍA */}
            <section className="filters-section">
                <div className="container">
                    <div className="category-filters">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <i className={cat.icon}></i>
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CARRUSEL DE CLUBS */}
            <section className="clubs-carousel-section">
                <div className="container">
                    <div className="club-scroll" aria-label="Lista de clubs">
                        <div className="club-scroll-track">
                            {filteredClubs.map(club => (
                                <div key={club.id} className="club-slide">
                                    <div className="club-card">
                                        <img src={club.img} alt={club.name} />
                                        <div className="club-overlay">
                                            <h3>{club.name}</h3>
                                            <p>{club.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="benefits-section">
                <div className="container">
                    <h2 className="section-title">Beneficios de Participar</h2>
                    <div className="benefits-grid">
                        {[
                            { icon: 'fas fa-user-check', title: 'Desarrollo Personal', desc: 'Autoestima, confianza y habilidades sociales.' },
                            { icon: 'fas fa-users', title: 'Trabajo en Equipo', desc: 'Colaboración hacia objetivos comunes.' },
                            { icon: 'fas fa-lightbulb', title: 'Habilidades Específicas', desc: 'Competencias técnicas y artísticas.' },
                            { icon: 'fas fa-globe', title: 'Visión Global', desc: 'Idiomas y ciudadanía mundial.' }
                        ].map((ben, i) => (
                            <div key={i} className="benefit-card">
                                <i className={`${ben.icon} benefit-icon`}></i>
                                <h3>{ben.title}</h3>
                                <p>{ben.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HORARIOS */}
            <section className="schedule-section">
                <div className="container">
                    <div className="schedule-box">
                        <i className="fas fa-calendar-alt schedule-icon"></i>
                        <h3>Horarios de Clubs</h3>
                        <p><strong>Miércoles</strong> - Última hora académica</p>
                        <p>Espacios dedicados al desarrollo integral</p>
                    </div>
                </div>
            </section>

            <div className="wavy-separator mx-auto mb-16"></div>
        </div>
    );
};

export default ClubsPage;
