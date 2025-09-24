import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Больше, чем просто программист 1С</h2>
        <p>
          Последние 20 лет я помогаю бизнесу решать задачи с помощью технологий, пройдя путь от классического разработчика 1С до архитектора комплексных систем. Я не просто 'кодирую' — я выступаю как бизнес-аналитик, который вникает в вашу проблему, и как руководитель проекта, который берет на себя ответственность за результат от 'А' до 'Я'.
        </p>
        <div className="key-metrics">
          <div className="metric">
            <h3>20+</h3>
            <p>лет опыта в IT и 1С</p>
          </div>
          <div className="metric">
            <h3>Full-stack</h3>
            <p>Аналитик, разработчик, руководитель проекта</p>
          </div>
          <div className="metric">
            <h3>1С + AI</h3>
            <p>Интеграция с нейросетями и веб-сервисами</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;