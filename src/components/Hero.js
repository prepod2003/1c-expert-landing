import React from 'react';
import './Hero.css';
import heroBackground from '../assets/hero-background.png';

import { motion } from 'framer-motion';

const Hero = () => {
  const text = "Архитектор 1С и интеллектуальных систем: Enterprise + AI + Web";

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
            Разрабатываю и внедряю решения там, где стандартная 1С бессильна. Объединяю надежность платформы 1С с мощью нейросетей, Python и C# для кратного роста эффективности вашего бизнеса.
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