import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2>Услуги и компетенции</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Экспертиза в 1С</h3>
            <ul>
              <li>Комплексное внедрение и сопровождение (ERP, КА, ЗУП, Бухгалтерия)</li>
              <li>Разработка на СКД, БСП, доработка функционала</li>
              <li>Обмены данными (Конвертация Данных)</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Интеграции и автоматизация</h3>
            <ul>
              <li>REST API (Честный ЗНАК, ЮKassa и др.)</li>
              <li>Платформа n8n для сложных сценариев</li>
              <li>Разработка Telegram-ботов</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>AI-решения</h3>
            <ul>
              <li>Проектирование интерактивных AI-агентов</li>
              <li>Аналитические дашборды в 1С с AI-анализом</li>
              <li>Работа с векторными базами данных и LLM</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Бизнес-анализ и управление проектом</h3>
            <ul>
              <li>Обследование и описание бизнес-процессов</li>
              <li>Формирование технических заданий</li>
              <li>Управление проектом внедрения от 'А' до 'Я'</li>
              <li>Обучение и сопровождение пользователей</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;