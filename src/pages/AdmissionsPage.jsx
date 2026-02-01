import React, { useState } from 'react';
import './AdmissionsPage.css';

const AdmissionsPage = () => {
    const [flipped, setFlipped] = useState({});
    const [formData, setFormData] = useState({
        nombre: '', email: '', telefono: '', nivel: 'Inicial', mensaje: ''
    });

    const toggleFlip = (id) => {
        setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`¡Gracias, ${formData.nombre}! Tu solicitud ha sido enviada.`);
        setFormData({ nombre: '', email: '', telefono: '', nivel: 'Inicial', mensaje: '' });
    };

    return (
        <div className="admissions-page">
            {/* HERO */}
            <section id="hero" className="hero-section">
                <div className="hero-background">
                    <img src="https://placehold.co/1920x900/0f172a/86efac?text=¡Matrículas+Abiertas!" alt="Matrículas UEGEA" />
                </div>
                <div className="container hero-content">
                    <h1 className="hero-title">¡Matrículas Abiertas en UEGEA!</h1>
                    <h2 className="hero-subtitle">Ciclo Sierra-Amazonía</h2>
                    <h3 className="hero-small">Desde Inicial hasta Bachillerato Técnico</h3>
                    <p className="hero-description">
                        Forma parte de una institución <strong>líder nacional</strong> con <strong>educación integral</strong>,
                        <strong>sostenibilidad</strong> y <strong>tecnología de vanguardia</strong>.
                        Ganadores del <strong>Premio Noûs 2025</strong>.
                    </p>
                    <div className="hero-tags">
                        <span className="tag-pill">#EducaciónIntegral</span>
                        <span className="tag-pill">#PremioNoûs2025</span>
                        <span className="tag-pill">#Valores</span>
                        <span className="tag-pill">#SalcedoCotopaxi</span>
                    </div>
                </div>
            </section>

            {/* NIVELES EDUCATIVOS - TARJETAS GIRATORIAS (SOLO GIRO) */}
            <section id="niveles" className="niveles-section py-16">
                <div className="container">
                    <h2 className="section-title">Niveles Educativos</h2>
                    <div className="niveles-grid">
                        {[
                            { id: 'inicial', title: 'Educación Inicial', edad: '4-5 años', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Inicial', icon: 'fas fa-child' },
                            { id: 'basica', title: 'Educación General Básica', edad: '6-15 años', img: 'https://placehold.co/500x350/803a08/ffffff?text=Básica', icon: 'fas fa-book-open' },
                            { id: 'bgu', title: 'Bachillerato General Unificado', edad: '16-18 años', img: 'https://placehold.co/500x350/15202e/86efac?text=BGU', icon: 'fas fa-graduation-cap' },
                            { id: 'tecnico', title: 'Bachillerato Técnico', edad: '16-18 años', img: 'https://placehold.co/500x350/16A34A/ffffff?text=Técnico', icon: 'fas fa-tools' }
                        ].map((nivel) => (
                            <div
                                key={nivel.id}
                                className={`flip-card ${flipped[nivel.id] ? 'flipped' : ''}`}
                                onClick={() => toggleFlip(nivel.id)}
                            >
                                <div className="flip-card-inner">
                                    {/* FRONT */}
                                    <div className="flip-card-front">
                                        <img src={nivel.img} alt={nivel.title} />
                                        <div className="card-overlay">
                                            <i className={`${nivel.icon} card-icon`}></i>
                                            <h3>{nivel.title}</h3>
                                            <p>{nivel.edad}</p>
                                            <span className="flip-hint">Haz clic para ver requisitos</span>
                                        </div>
                                    </div>
                                    {/* BACK */}
                                    <div className="flip-card-back">
                                        <h3>Requisitos</h3>
                                        <ul>
                                            <li>Certificado de nacimiento</li>
                                            <li>Cédula de identidad</li>
                                            <li>Certificado médico</li>
                                            <li>Certificado de conducta</li>
                                            <li>Fotos carnet (4)</li>
                                            {nivel.id !== 'inicial' && <li>Certificado de estudios previos</li>}
                                        </ul>
                                        <p><strong>Modalidad:</strong> Presencial</p>
                                        <p><strong>Costo:</strong> Consultar en secretaría</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section id="proceso" className="proceso-section py-16">
                <div className="container">
                    <h2 className="section-title">Proceso de Admisión</h2>
                    <div className="timeline">
                        {[
                            { step: 1, title: 'Solicitud de Información', desc: 'Contacta con nosotros para conocer el proceso.' },
                            { step: 2, title: 'Entrevista Familiar', desc: 'Reunión con padres y estudiante.' },
                            { step: 3, title: 'Evaluación Académica', desc: 'Prueba según nivel educativo.' },
                            { step: 4, title: 'Proceso de Matrícula', desc: 'Entrega de documentos y formalización.' }
                        ].map((paso, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-number">{paso.step}</div>
                                <div className="timeline-content">
                                    <h3>{paso.title}</h3>
                                    <p>{paso.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FECHAS IMPORTANTES - SIN FECHAS, CON ICONOS */}
            <section id="fechas" className="fechas-section py-16">
                <div className="container">
                    <h2 className="section-title">Régimen Sierra-Amazonía</h2>
                    <div className="fechas-grid">
                        {[
                            { title: 'Pre-matrícula', icon: 'fas fa-calendar-check' },
                            { title: 'Matrículas Ordinarias', icon: 'fas fa-user-check' },
                            { title: 'Matrículas Extraordinarias', icon: 'fas fa-clock' },
                            { title: 'Inicio del Año Lectivo', icon: 'fas fa-school' }
                        ].map((f, i) => (
                            <div key={i} className="fecha-card">
                                <i className={`${f.icon} fecha-icon`}></i>
                                <h3>{f.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORMULARIO */}
            <section id="formulario" className="form-section py-16">
                <div className="container">
                    <h2 className="section-title">Inicia tu Pre-matrícula</h2>
                    <form onSubmit={handleSubmit} className="admissions-form">
                        <input type="text" placeholder="Nombre Completo" required value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
                        <input type="email" placeholder="Correo Electrónico" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                        <input type="tel" placeholder="Teléfono" required value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} />
                        <select value={formData.nivel} onChange={e => setFormData({ ...formData, nivel: e.target.value })}>
                            <option>Inicial</option>
                            <option>Básica</option>
                            <option>BGU</option>
                            <option>Técnico</option>
                        </select>
                        <textarea placeholder="Mensaje (opcional)" rows="4" value={formData.mensaje} onChange={e => setFormData({ ...formData, mensaje: e.target.value })}></textarea>
                        <button type="submit" className="submit-btn">Enviar Solicitud</button>
                    </form>
                </div>
            </section>

            {/* CONTACTO */}
            <section className="contacto-section">
                <div className="container">
                    <h2 className="section-title">¿Dudas? Contáctanos</h2>
                    <div className="contacto-grid">
                        <div className="contacto-item">
                            <i className="fas fa-phone"></i>
                            <p><strong>Teléfonos:</strong><br />032-729727<br />099-2534364<br />098-7780902</p>
                        </div>
                        <div className="contacto-item">
                            <i className="fab fa-whatsapp"></i>
                            <p><a href="https://walink.co/caf1a0" target="_blank" rel="noopener noreferrer">Enviar mensaje por WhatsApp</a></p>
                        </div>
                        <div className="contacto-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><strong>Ubicación:</strong><br />Rumipamba Central, Río Napo y Río San Miguel, Salcedo, Cotopaxi</p>
                        </div>
                    </div>
                    <div className="final-cta">
                        <h3>¿Continúas tus estudios?</h3>
                        <p><strong>¡Matricúlate YA!</strong></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;