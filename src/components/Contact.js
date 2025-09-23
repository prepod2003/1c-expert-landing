import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
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
      setStatus('Ошибка: Переменные окружения не найдены. Перезапустите сервер.');
      return;
    }

    const text = `
      Новая заявка с сайта!
      Имя: ${formData.name}
      Контакт (Email/Telegram): ${formData.contact}
      Сообщение:
      ${formData.message}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      });
      setStatus('Сообщение успешно отправлено!');
      setFormData({ name: '', contact: '', message: '' });
    } catch (error) {
      console.error('Ошибка при отправке в Telegram:', error);
      setStatus('Ошибка при отправке. Попробуйте позже.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Готовы обсудить ваш проект?</h2>
      <p>Свяжитесь со мной, и мы найдем оптимальное решение для вашей задачи.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Или оставьте заявку</h3>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contact"
          placeholder="Email или Telegram"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Краткое описание задачи"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Отправить</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;