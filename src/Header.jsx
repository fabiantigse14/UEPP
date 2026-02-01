import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const fullText = " ....Gral Eloy Alfaro....";
    const shortText = "General Eloy Alfaro";

    const [displayText, setDisplayText] = useState('');
    const [isShort, setIsShort] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        let index = 0;
        let timeout;

        const typeText = () => {
            if (index <= (isShort ? shortText : fullText).length) {
                setDisplayText((isShort ? shortText : fullText).substring(0, index));
                index++;
                timeout = setTimeout(typeText, 80);
            } else {
                setCursorVisible(false);
                setTimeout(() => {
                    setIsShort(!isShort);
                    index = 0;
                    setCursorVisible(true);
                    typeText();
                }, 2000);
            }
        };

        typeText();

        return () => clearTimeout(timeout);
    }, [isShort]);

    useEffect(() => {
        const blink = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);
        return () => clearInterval(blink);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                {/* LOGO IZQUIERDA */}
                <div className="header-logo">
                    <Link to="/">
                        <img src="/log2.png" alt="Logo UEGEA" className="logo-img" />
                    </Link>
                </div>

                {/* CENTRO: TEXTO ANIMADO + IMAGEN */}
                <div className="header-center">
                    <div className="logo-center-wrapper">
                        <img src="/ani.png" alt="Animación" className="logo-center" />
                    </div>
                    <div className="school-name-wrapper">
                        <div className="school-name-line1">Unidad Educativa</div>
                        <div className="school-name-line2">
                            {displayText}
                            {cursorVisible && <span className="typing-cursor">|</span>}
                        </div>
                        <img src="/letrasg.png" alt="Letras G" className="letrasg-image" />
                    </div>
                </div>

                {/* DERECHA: ICONOS SOCIALES */}
                <div className="header-social">
                    <div className="social-icons">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://www.facebook.com/uegea" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://wa.me/593999888901" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* MENÚ DE NAVEGACIÓN */}
            <nav className="nav-menu">
                {[
                    { to: "/", label: "Inicio" },
                    { to: "/admisiones", label: "Admisiones" },
                    { to: "/ejetransversal", label: "Eje Transversal" },
                    { to: "/clubs", label: "Clubs" },
                    { to: "/nuestrahistoria", label: "Nuestra Historia" },
                    { to: "/contacto", label: "Contacto" }
                ].map((item, i) => (
                    <Link
                        key={i}
                        to={item.to}
                        className="nav-link"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
};

export default Header;