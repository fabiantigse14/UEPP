import React, { useState } from 'react';
import './FloatingFacebookFeed.css';

const FloatingFacebookFeed = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="floating-facebook-container">
            {isOpen && (
                <div className="facebook-feed-window">
                    <div className="facebook-feed-header">
                        <span>Noticias de Facebook</span>
                        <button onClick={() => setIsOpen(false)}>&times;</button>
                    </div>
                    <div className="facebook-feed-body">
                        <iframe
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fuegea&tabs=timeline&width=340&height=400&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=YOUR_FACEBOOK_APP_ID_HERE" /* Reemplaza YOUR_FACEBOOK_APP_ID_HERE con tu ID de aplicación de Facebook */
                            width="340"
                            height="400"
                            style={{ border: 'none', overflow: 'hidden' }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen={true}
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                    <div className="facebook-feed-footer">
                        <a href="https://www.facebook.com/uegea" target="_blank" rel="noopener noreferrer">
                            Ver perfil completo en Facebook
                        </a>
                    </div>
                </div>
            )}
            <button className="facebook-float-button" onClick={() => setIsOpen(!isOpen)}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook" />
            </button>
        </div>
    );
};

export default FloatingFacebookFeed;
