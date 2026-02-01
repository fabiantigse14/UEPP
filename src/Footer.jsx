import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">

                    {/* LOGO + TEXTO */}
                    <div className="footer-logo-section animate-fade-in">
                        <div className="footer-logo">
                            <img src="/UEGEA.png" alt="UEGEA Logo" className="logo-img" />
                            <img src="/letras.png" alt="Letras" className="letras-footer-img" />
                        </div>
                        <div className="footer-school-name">
                            <p className="school-line1">Unidad Educativa</p>
                            <p className="school-line2">General Eloy Alfaro</p>
                        </div>
                    </div>

                    {/* INFORMACIÓN DE CONTACTO */}
                    <div className="footer-info animate-slide-up">
                        <h3 className="info-title">Información de Contacto</h3>
                        <p className="info-address">
                            <i className="fas fa-map-marker-alt"></i>
                            Calle Napo y San Miguel, Rumipamba Central, Salcedo, Cotopaxi
                        </p>
                        <p className="info-phone">
                            <i className="fas fa-phone"></i>
                            <a href="tel:032729727">(03) 272-9727</a> | 
                            <a href="tel:+593987780902"> +593 98 778 0902</a>
                        </p>
                        <p className="info-whatsapp">
                            <i className="fab fa-whatsapp"></i>
                            <a href="https://wa.me/593985432988" target="_blank" rel="noopener noreferrer">
                                098-543-2988 (WhatsApp)
                            </a>
                        </p>
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="footer-social animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h3 className="social-title">Síguenos</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/uegea/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.tiktok.com/@uegeateam" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a href="https://uegea.edu.ec" target="_blank" rel="noopener noreferrer" className="social-icon web">
                                <i className="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="footer-copyright">
                    <p>
                        © 2025 <span className="highlight">UEGEA</span> - Todos los derechos reservados | 
                        Desarrollado con <i className="fas fa-heart pulse"></i> para la educación
                    </p>
                </div>
            </div>
        </footer>
    );
}