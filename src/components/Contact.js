import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      setStatus('Ошибка конфигурации сервера.');
      return;
    }

    const text = `
      Заявка на обратный звонок с сайта!
      Имя: ${formData.name}
      Телефон/Контакт: ${formData.phone}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
      });
      setStatus('Спасибо! Скоро свяжусь с вами.');
      setFormData({ name: '', phone: '' });
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error);
      setStatus('Ошибка отправки. Попробуйте позже.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Нужна консультация?</h2>
        <p>Оставьте свой номер, и я перезвоню вам в ближайшее время.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон или Telegram"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <button type="submit">Жду звонка</button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;