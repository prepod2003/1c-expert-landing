import React from 'react';
import './Hero.css';
import heroBackground from '../assets/hero-background.png';

import { motion } from 'framer-motion';

const Hero = () => {
  const text = "1С-Эксперт нового поколения";

  return (
    <section 
      className="hero" 
      style={{ 
        '--hero-bg-image': `url(${heroBackground})`,
        position: 'relative', 
        zIndex: 2,
      }}
    >
      <div className="container">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 1 }}
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            Решаю задачи бизнеса от 'А' до 'Я': от бизнес-анализа и архитектуры до разработки и внедрения 1С, интегрированной с AI и современными веб-технологиями.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <a href="#contact" className="cta-button">Заказать звонок</a>
            <a href="#footer" className="cta-button secondary">Контакты</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;