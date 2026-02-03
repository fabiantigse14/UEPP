import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
    };

    return (
        <div className="contact-page">
            <section className="contact-hero animate-on-scroll">
                <h1 className="section-title">Contáctanos</h1>
                <span className="section-subtitle">Estamos aquí para ayudarte</span>
                <div className="wavy-separator mx-auto mt-4" style={{ maxWidth: '200px' }}></div>
            </section>

            <section className="container contact-content">
                <div className="contact-info-card animate-on-scroll">
                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h3>Dirección</h3>
                            <p>Rumipamba Central</p>
                            <p>Calles Río Napo y Río San Miguel</p>
                            <p>Salcedo, Cotopaxi, Ecuador</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h3>Teléfonos</h3>
                            <p><a href="tel:+59332729727">03 2729 727</a> (Institucional)</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h3>Email</h3>
                            <p><a href="mailto:info@uegea.edu.ec">info@uegea.edu.ec</a></p>
                            <p><a href="mailto:pachocarabocico@gmail.com">pachocarabocico@gmail.com</a> (Rectorado)</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-share-alt"></i>
                        <div>
                            <h3>Redes Sociales</h3>
                            <p><a href="https://facebook.com/uegea" target="_blank" rel="noopener noreferrer">Facebook (Noticias)</a></p>
                            <p><a href="https://instagram.com/ue.gea" target="_blank" rel="noopener noreferrer">Instagram (Galería)</a></p>
                            <p><a href="https://tiktok.com/@uegeateam" target="_blank" rel="noopener noreferrer">TikTok (Estudiantil)</a></p>
                            <p><a href="https://youtube.com/@uegeaSalcedo" target="_blank" rel="noopener noreferrer">YouTube (Documentales)</a></p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-card animate-on-scroll">
                    <h2 style={{ fontFamily: 'var(--font-oswald)', color: 'var(--military-green)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Envíanos un mensaje</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Correo Electrónico"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <textarea
                            rows="5"
                            placeholder="¿En qué podemos ayudarte?"
                            required
                            value={formData.mensaje}
                            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                        ></textarea>
                        <button type="submit" className="submit-btn">Enviar Mensaje</button>
                    </form>
                </div>
            </section>

            <section className="map-section animate-on-scroll">
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2942188414445!2d-78.5912345!3d-1.03789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d48a6096538961%3A0xc005574577881c1c!2sUnidad%20Educativa%20General%20Eloy%20Alfaro!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación UEGEA"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
