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

    // Datos de clubs
    const clubs = [
        // DEPORTIVOS
        { id: 1, name: 'Club de Fútbol', category: 'deportivos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Fútbol', desc: 'Entrenamiento, torneos y valores deportivos.' },
        { id: 2, name: 'Club de Basketball', category: 'deportivos', img: 'https://placehold.co/500x350/803a08/ffffff?text=Basketball', desc: 'Técnica, estrategia y trabajo en equipo.' },

        // ARTÍSTICOS
        { id: 3, name: 'Club de Teatro', category: 'artisticos', img: 'https://placehold.co/500x350/15202e/86efac?text=Teatro', desc: 'Expresión corporal, guiones y puestas en escena.' },
        { id: 4, name: 'Club de Música', category: 'artisticos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Música', desc: 'Instrumentos, canto coral y teoría musical.' },
        { id: 5, name: 'Club de Danza', category: 'artisticos', img: 'https://placehold.co/500x350/803a08/ffffff?text=Danza', desc: 'Ritmo, coreografías y presentaciones.' },
        { id: 6, name: 'Club de Fotografía', category: 'artisticos', img: 'https://placehold.co/500x350/15202e/86efac?text=Fotografía', desc: 'Técnicas, edición y exposiciones.' },

        // ACADÉMICOS
        { id: 7, name: 'Club de Matemáticas', category: 'academicos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Matemáticas', desc: 'Olimpiadas, problemas y lógica.' },
        { id: 8, name: 'Club de Astronomía', category: 'academicos', img: 'https://placehold.co/500x350/803a08/ffffff?text=Astronomía', desc: 'Observación estelar y ciencia espacial.' },

        // TECNOLÓGICOS
        { id: 9, name: 'Club de Robótica', category: 'tecnologicos', img: 'https://placehold.co/500x350/15202e/86efac?text=Robótica', desc: 'Construcción, programación y competencias.' },
        { id: 10, name: 'Club de Programación', category: 'tecnologicos', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Programación', desc: 'Apps, juegos y desarrollo web.' },

        // CULTURALES
        { id: 11, name: 'Club de Periodismo Escolar', category: 'culturales', img: 'https://placehold.co/500x350/803a08/ffffff?text=Periodismo', desc: 'Redacción, entrevistas y periódico escolar.' },
        { id: 12, name: 'Club de Literatura', category: 'culturales', img: 'https://placehold.co/500x350/15202e/86efac?text=Literatura', desc: 'Lectura, escritura creativa y tertulias.' }
    ];

    const categories = [
        { id: 'all', name: 'Todos', icon: 'fas fa-th-large' },
        { id: 'deportivos', name: 'Deportivos', icon: 'fas fa-futbol' },
        { id: 'artisticos', name: 'Artísticos', icon: 'fas fa-palette' },
        { id: 'academicos', name: 'Académicos', icon: 'fas fa-graduation-cap' },
        { id: 'tecnologicos', name: 'Tecnológicos', icon: 'fas fa-microchip' },
        { id: 'culturales', name: 'Culturales', icon: 'fas fa-book' }
    ];

    const filteredClubs = activeCategory === 'all'
        ? clubs
        : clubs.filter(club => club.category === activeCategory);

    return (
        <div className="clubs-page">
            {/* HERO */}
            <section id="hero" className="hero-section">
                <div className="hero-background">
                    <img src="https://placehold.co/1920x900/0f172a/86efac?text=Clubs+UEGEA" alt="Clubs UEGEA" />
                </div>
                <div className="container hero-content">
                    <h1 className="hero-title">Clubs y Actividades</h1>
                    <p className="hero-description">
                        Descubre tu pasión, desarrolla habilidades y forma parte de una comunidad activa.
                        ¡12+ clubs para todos los intereses!
                    </p>
                    <div className="hero-tags">
                        <span className="tag-pill">#ClubsUEGEA</span>
                        <span className="tag-pill">#Actividades</span>
                        <span className="tag-pill">#DesarrolloIntegral</span>
                    </div>

                    {/* ESTADÍSTICAS ANIMADAS */}
                    <div className="stats-container" ref={statsRef}>
                        <div className="stat-item">
                            <div className="stat-number" data-target="12">0</div>
                            <p>Clubs Activos</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" data-target="150">0</div>
                            <p>Estudiantes Participantes</p>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number" data-target="25">0</div>
                            <p>Horas Semanales</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FILTROS POR CATEGORÍA */}
            <section className="filters-section py-16">
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
            <section className="clubs-carousel-section py-16">
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
                                            <span className="join-btn">¡Únete!</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFICIOS */}
            <section className="benefits-section py-16">
                <div className="container">
                    <h2 className="section-title">Beneficios de Participar</h2>
                    <div className="benefits-grid">
                        {[
                            { icon: 'fas fa-user-check', title: 'Desarrollo Personal', desc: 'Autoestima, confianza y habilidades sociales.' },
                            { icon: 'fas fa-users', title: 'Trabajo en Equipo', desc: 'Colaboración hacia objetivos comunes.' },
                            { icon: 'fas fa-lightbulb', title: 'Habilidades Específicas', desc: 'Competencias en áreas de interés.' },
                            { icon: 'fas fa-graduation-cap', title: 'Formación Integral', desc: 'Experiencias prácticas complementarias.' }
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
            <section className="schedule-section py-16">
                <div className="container">
                    <div className="schedule-box">
                        <i className="fas fa-calendar-alt schedule-icon"></i>
                        <h3>Horarios</h3>
                        <p><strong>Todos los clubs se realizan el día miércoles</strong> en la última hora académica.</p>
                    </div>
                </div>
            </section>

            {/* PROCESO DE INSCRIPCIÓN */}
            <section className="inscription-section py-16">
                <div className="container">
                    <h2 className="section-title">Proceso de Inscripción</h2>
                    <div className="steps-grid">
                        {[
                            { step: 1, title: 'Elige tu Club', desc: 'Selecciona el que más te apasione.' },
                            { step: 2, title: 'Regístrate', desc: 'Completa el formulario con tus datos.' },
                            { step: 3, title: 'Asiste a la Primera Sesión', desc: '¡Empieza a disfrutar!' }
                        ].map((paso, i) => (
                            <div key={i} className="step-card">
                                <div className="step-number">{paso.step}</div>
                                <h3>{paso.title}</h3>
                                <p>{paso.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ClubsPage;