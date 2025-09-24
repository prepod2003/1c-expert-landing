import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const tech = {
    "Языки": ["1С", "Python", "C#", "JavaScript"],
    "Платформы": ["1С:Предприятие", "n8n"],
    "Базы данных": ["MS SQL", "PostgreSQL"],
    "AI": ["LLM", "Vector DB"]
  };

  return (
    <section className="tech-stack">
      <div className="container">
        <h2>Стек технологий</h2>
        <div className="tech-grid">
          {Object.entries(tech).map(([category, items]) => (
            <div className="tech-category" key={category}>
              <h3>{category}</h3>
              <div className="tech-items">
                {items.map(item => (
                  <span className="tech-item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;