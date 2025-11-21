import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <h2>Больше, чем просто программист 1С</h2>
          <p>
            За 20 лет в IT я прошел путь от классической автоматизации до архитектуры высоконагруженных гибридных систем. Мой подход — это синергия: я глубоко понимаю «боли» бухгалтерии и производства, но решаю их современными методами.
            Если задачу нельзя решить средствами 1С, я подключаю искусственный интеллект, пишу микросервисы или настраиваю интеграции. Я не просто закрываю тикеты — я проектирую цифровое будущее вашей компании.
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
      </div>
    </section>
  );
};

export default About;