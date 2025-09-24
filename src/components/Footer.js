import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <h2>Контакты</h2>
        <div className="contact-info">
          <p>📍 Санкт-Петербург</p>
          <p>
            <a href="tel:+79045596847">📞 +7 (904) 559-68-47</a>
          </p>
          <p>
            <a href="mailto:prepod2003@yandex.ru">📧 prepod2003@yandex.ru</a>
          </p>
        </div>
        <div className="social-links">
          <a href="https://t.me/Prepod2003" target="_blank" rel="noopener noreferrer" className="social-link telegram">Telegram</a>
          <a href="https://wa.me/79045596847" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;