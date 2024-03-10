import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';
const ExpertServices = () => {
  const servicesAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const expertServicesList = [
    'Персонални тренировки',
    'Групови тренировки',
    'Функционален тренинг',
    'Кардио програми',
    'Yoga и пилатес',
    'Специализирани диети',
    'Фитнес асесменти',
    'Тренировки за бременни',
    'Тренировки за възрастни',
    'Рехабилитация и физиотерапия',
  ];

  return (
    <animated.div style={servicesAnimation} className="services-container">
      <h2>Експертни услуги</h2>
      <p>
        Открийте нашите експертни услуги, предлагани от квалифицирани инструктори и треньори. 
      </p>
        <p>
        Независимо дали сте начинаещ или опитен спортист, Fitness Deluxe & Spa има нещо за всеки.
        </p>
      <ul>
        {expertServicesList.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </animated.div>
  );
}

export default ExpertServices;