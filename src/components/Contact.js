import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Готовы обсудить ваш проект?</h2>
      <p>Свяжитесь со мной, и мы найдем оптимальное решение для вашей задачи.</p>
      <div className="contact-details">
        <a href="mailto:your-email@example.com" className="contact-link">your-email@example.com</a>
        <a href="https://t.me/your_telegram_username" target="_blank" rel="noopener noreferrer" className="contact-link">Telegram</a>
      </div>
      <form className="contact-form">
        <h3>Или оставьте заявку</h3>
        <input type="text" placeholder="Ваше имя" required />
        <input type="text" placeholder="Email или Telegram" required />
        <textarea placeholder="Краткое описание задачи" rows="5" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default Contact;