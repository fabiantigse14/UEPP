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
                <div className="container hero-content">
                    <h1 className="hero-title">¡Matrículas Abiertas!</h1>
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
                     <div className="wavy-separator mx-auto mt-8" style={{ maxWidth: '300px' }}></div>
                </div>
            </section>

            {/* NIVELES EDUCATIVOS - TARJETAS GIRATORIAS */}
            <section id="niveles" className="niveles-section">
                <div className="container">
                    <h2 className="section-title">Oferta Académica</h2>
                    <div className="niveles-grid">
                        {[
                            {
                                id: 'inicial',
                                title: 'Educación Inicial',
                                edad: '3-5 años',
                                img: 'https://placehold.co/500x350/16A34A/ffffff?text=Inicial',
                                icon: 'fas fa-child',
                                reqs: ['Cédula Estudiante', 'Cédula Representantes', 'Planilla Servicio Básico', 'Certificado Nacimiento']
                            },
                            {
                                id: 'basica',
                                title: 'Educación Básica',
                                edad: '6-14 años',
                                img: 'https://placehold.co/500x350/803a08/ffffff?text=Básica',
                                icon: 'fas fa-book-open',
                                reqs: ['Certificado de Promoción', 'Cédula de Identidad', 'Ficha Médica', 'Planilla Servicio Básico']
                            },
                            {
                                id: 'bgu',
                                title: 'BGU en Ciencias',
                                edad: '15-18 años',
                                img: 'https://placehold.co/500x350/15202e/86efac?text=Ciencias',
                                icon: 'fas fa-flask',
                                reqs: ['Pase de Año', 'Investigación "Aprendiendo para la Vida"', 'Vocación Universitaria']
                            },
                            {
                                id: 'tecnico',
                                title: 'Bachillerato Técnico',
                                edad: '15-18 años',
                                img: 'https://placehold.co/500x350/16A34A/ffffff?text=Técnico',
                                icon: 'fas fa-tools',
                                reqs: ['Especialidad: Electromecánica Automotriz', 'Especialidad: Producción Agropecuaria', 'Prácticas Pre-profesionales']
                            }
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
                                            {nivel.reqs.map((req, i) => (
                                                <li key={i}><i className="fas fa-check-circle" style={{marginRight: '5px', color: 'var(--gold-accent)'}}></i> {req}</li>
                                            ))}
                                        </ul>
                                        <p style={{marginTop: '1rem'}}><strong>Modalidad:</strong> Presencial Matutina</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <section id="proceso" className="proceso-section">
                <div className="container">
                    <h2 className="section-title">Proceso de Admisión</h2>
                    <div className="timeline">
                        {[
                            { step: 1, title: 'Información e Inscripción', desc: 'Abril - Junio. Contacto inicial y registro de datos.' },
                            { step: 2, title: 'Entrevista Familiar', desc: 'Alineación con nuestro modelo de sostenibilidad y valores.' },
                            { step: 3, title: 'Matriculación Ordinaria', desc: 'Julio - Agosto. Entrega de carpeta y formalización.' },
                            { step: 4, title: 'Inicio de Clases', desc: 'Septiembre. Inauguración del Año Lectivo.' }
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

                    <div className="text-center mt-8">
                         <p style={{color: 'var(--text-secondary)'}}>
                            <em>* Costos accesibles de clase media. Consultar valores actualizados en secretaría.</em>
                        </p>
                    </div>
                </div>
            </section>

            {/* FECHAS IMPORTANTES */}
            <section id="fechas" className="fechas-section">
                <div className="container">
                    <h2 className="section-title">Fechas Clave</h2>
                    <div className="fechas-grid">
                        {[
                            { title: 'Inscripciones Abiertas', icon: 'fas fa-calendar-check' },
                            { title: 'Matrículas Ordinarias', icon: 'fas fa-user-check' },
                            { title: 'Matrículas Extraordinarias', icon: 'fas fa-clock' },
                            { title: 'Inicio Clases: Septiembre', icon: 'fas fa-school' }
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
            <section id="formulario" className="form-section">
                <div className="container">
                    <h2 className="section-title">Solicita Información</h2>
                    <form onSubmit={handleSubmit} className="admissions-form">
                        <input type="text" placeholder="Nombre del Representante" required value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
                        <input type="email" placeholder="Correo Electrónico" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                        <input type="tel" placeholder="Teléfono de Contacto" required value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} />
                        <select value={formData.nivel} onChange={e => setFormData({ ...formData, nivel: e.target.value })}>
                            <option value="Inicial">Educación Inicial</option>
                            <option value="Basica">Educación Básica</option>
                            <option value="BGU">Bachillerato Ciencias</option>
                            <option value="Tecnico">Bachillerato Técnico</option>
                        </select>
                        <textarea placeholder="¿Alguna pregunta específica?" rows="4" value={formData.mensaje} onChange={e => setFormData({ ...formData, mensaje: e.target.value })}></textarea>
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
                            <p><strong>Teléfonos:</strong><br />03 2729 727 (Secretaría)</p>
                        </div>
                        <div className="contacto-item">
                            <i className="fab fa-whatsapp"></i>
                            <p><a href="https://wa.me/59332729727" target="_blank" rel="noopener noreferrer">Escríbenos al WhatsApp</a></p>
                        </div>
                        <div className="contacto-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <p><strong>Ubicación:</strong><br />Rumipamba Central, Río Napo y Río San Miguel, Salcedo</p>
                        </div>
                    </div>
                    <div className="final-cta">
                        <h3>¿Listo para el futuro?</h3>
                        <p style={{color: 'white'}}><strong>¡Únete a la Familia UEGEA!</strong></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPage;
