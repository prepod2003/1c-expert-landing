import React from 'react';
import './Hero.css';
import heroBackground from '../assets/hero-background.png';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBackground})` }}>
      <div className="hero-content">
        <h1>Интеллектуальная автоматизация вашего бизнеса на 1С</h1>
        <p>Создаю надежные решения на 1С, расширяя их возможности с помощью AI, REST API и n8n для роста вашего бизнеса.</p>
        <a href="#contact" className="cta-button">Обсудить проект</a>
      </div>
    </section>
  );
};

export default Hero;