import React, { useState, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: 'Información sobre Admisiones',
        mensaje: ''
    });

    // Animación por scroll
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const toggleForm = () => {
        setFormOpen(prev => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`¡Gracias, ${formData.nombre}! Tu mensaje ha sido enviado.`);
        setFormData({ nombre: '', email: '', telefono: '', asunto: 'Información sobre Admisiones', mensaje: '' });
        setFormOpen(false);
    };

    return (
        <div className="contact-page">
            {/* HERO */}
            <section id="hero" className="hero-section">
                <div className="hero-background">
                    <img src="https://placehold.co/1920x900/0f172a/86efac?text=Contacto+UEGEA" alt="Contacto UEGEA" />
                </div>
                <div className="container hero-content animate-on-scroll">
                    <h1 className="hero-title">Contáctanos</h1>
                    <p className="hero-description">
                        Estamos listos para ayudarte. Escribe, llama o visítanos en nuestra <strong>sede única</strong>.
                    </p>
                    <div className="hero-tags">
                        <span className="tag-pill">#Contáctanos</span>
                        <span className="tag-pill">#Admisiones</span>
                        <span className="tag-pill">#UEGEA</span>
                    </div>
                </div>
            </section>

            {/* TARJETAS DE CONTACTO */}
            <section className="contact-cards-section py-16">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-card animate-on-scroll">
                            <i className="fas fa-map-marker-alt contact-icon"></i>
                            <h3>Nuestra Sede</h3>
                            <p>Rumipamba Central, Salcedo, Cotopaxi, Ecuador</p>
                        </div>
                        <div className="contact-card animate-on-scroll">
                            <i className="fas fa-phone contact-icon"></i>
                            <h3>Teléfonos</h3>
                            <p>032-729727<br />099-2534364<br />098-7780902</p>
                        </div>
                        <div className="contact-card animate-on-scroll">
                            <i className="fab fa-whatsapp contact-icon"></i>
                            <h3>WhatsApp</h3>
                            <p><a href="https://wa.me/593985432988" target="_blank" rel="noopener noreferrer">098-5432988</a></p>
                        </div>
                        <div className="contact-card animate-on-scroll">
                            <i className="fas fa-share-alt contact-icon"></i>
                            <h3>Redes Sociales</h3>
                            <div className="social-links">
                                <a href="#" target="_blank" className="social-icon facebook"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" target="_blank" className="social-icon tiktok"><i className="fab fa-tiktok"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULARIO DESPLEGABLE */}
            <section className="form-section py-16">
                <div className="container">
                    <div className="form-accordion animate-on-scroll">
                        <button className="accordion-toggle" onClick={toggleForm}>
                            <h2><i className="fas fa-envelope"></i> Envíanos un Mensaje</h2>
                            <i className={`fas fa-chevron-down ${formOpen ? 'rotated' : ''}`}></i>
                        </button>
                        <div className={`accordion-content ${formOpen ? 'open' : ''}`}>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <input type="text" placeholder="Nombre Completo" required value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })} />
                                    <input type="email" placeholder="Correo Electrónico" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="form-row">
                                    <input type="tel" placeholder="Teléfono" value={formData.telefono} onChange={e => setFormData({ ...formData, telefono: e.target.value })} />
                                    <select value={formData.asunto} onChange={e => setFormData({ ...formData, asunto: e.target.value })}>
                                        <option>Información sobre Admisiones</option>
                                        <option>Niveles Educativos</option>
                                        <option>Valores y Principios</option>
                                        <option>Costos y Becas</option>
                                        <option>Programar Visita</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <textarea placeholder="Tu mensaje..." rows="5" required value={formData.mensaje} onChange={e => setFormData({ ...formData, mensaje: e.target.value })}></textarea>
                                <button type="submit" className="submit-btn">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* HORARIOS */}
            <section className="schedule-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Horarios de Atención</h2>
                    <div className="schedule-grid">
                        <div className="schedule-item animate-on-scroll">
                            <i className="fas fa-clock"></i>
                            <h3>Lunes - Viernes</h3>
                            <p>7:00 AM - 5:00 PM</p>
                        </div>
                        <div className="schedule-item animate-on-scroll">
                            <i className="fas fa-calendar-day"></i>
                            <h3>Sábados</h3>
                            <p>8:00 AM - 12:00 PM</p>
                        </div>
                        <div className="schedule-item animate-on-scroll">
                            <i className="fas fa-ban"></i>
                            <h3>Domingos</h3>
                            <p>Cerrado</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAPA */}
            <section className="map-section py-16">
                <div className="container">
                    <h2 className="section-title animate-on-scroll">Nuestra Ubicación</h2>
                    <div className="map-container animate-on-scroll">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.3456789012345!2d-78.589123!3d-1.045678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDInNDYuNCJTIDc4wrAzNicxMi4zIlc!5e0!3m2!1ses!2sec!4v1234567890"
                            width="100%"
                            height="500"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa UEGEA"
                        ></iframe>
                        <a href="https://maps.google.com/?q=Rumipamba+Central,+Salcedo,+Cotopaxi" target="_blank" rel="noopener noreferrer" className="map-link">
                            <i className="fas fa-external-link-alt"></i> Ver en Google Maps
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="cta-section">
                <div className="container">
                    <h2 className="cta-title animate-on-scroll">¡Únete a la Familia UEGEA!</h2>
                    <div className="cta-buttons animate-on-scroll">
                        <a href="https://walink.co/caf1a0" target="_blank" rel="noopener noreferrer" className="cta-btn whatsapp">
                            <i className="fab fa-whatsapp"></i> Chatea con Nosotros
                        </a>
                        <a href="tel:+59332729727" className="cta-btn phone">
                            <i className="fas fa-phone"></i> Llama Ahora
                        </a>
                    </div>
                    <div className="cta-stats animate-on-scroll">
                        <div className="stat">
                            <span className="stat-number">500</span>+
                            <p>Estudiantes</p>
                        </div>
                        <div className="stat">
                            <span className="stat-number">25</span>+
                            <p>Años</p>
                        </div>
                        <div className="stat">
                            <span className="stat-number">100</span>%
                            <p>Calidad</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;