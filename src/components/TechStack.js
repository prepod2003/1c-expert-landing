import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const tech = {
    "Языки": ["1С (Expert)", "C# (.NET)", "Python", "JavaScript"],
    "Платформы": ["1С:Предприятие 8.3", "n8n", "Telegram API"],
    "Базы данных": ["MS SQL", "PostgreSQL", "Supabase"],
    "AI & Data": ["OpenCV", "Aspose", "LLM", "Vector DB"]
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