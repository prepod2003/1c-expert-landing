import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2>Обо мне</h2>
        <p>
          Здравствуйте! Я — IT-специалист с 20-летним опытом, сочетающий глубокую экспертизу в системах 1С с уверенным владением современными технологиями разработки и автоматизации.
        </p>
        <div className="key-metrics">
          <div className="metric">
            <h3>20+</h3>
            <p>лет опыта в IT</p>
          </div>
          <div className="metric">
            <h3>100+</h3>
            <p>успешных внедрений</p>
          </div>
          <div className="metric">
            <h3>Экспертиза</h3>
            <p>в 1С, Python, C#, AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;