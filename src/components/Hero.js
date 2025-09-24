import React from 'react';
import './Hero.css';
import heroBackground from '../assets/hero-background.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <h1>1С-Эксперт нового поколения</h1>
        <p>Решаю задачи бизнеса от 'А' до 'Я': от бизнес-анализа и архитектуры до разработки и внедрения 1С, интегрированной с AI и современными веб-технологиями.</p>
        <div className="hero-buttons">
          <a href="#contact" className="cta-button">Заказать звонок</a>
          <a href="#footer" className="cta-button secondary">Контакты</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;