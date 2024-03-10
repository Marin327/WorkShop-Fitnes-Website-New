import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const ExtraServices = () => {
  const extraServicesAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const specialWorkouts = [
    'HIIT за бързо изгаряне на калории',
    'Силов тренинг със собствено тегло',
    'Кардио-танци за забавление',
    'Йога за релаксация и гъвкавост',
    'Бокс за фитнес и стрес релаксация',
    'Тренировка на гърба за правилна основа',
    'Функционален тренинг за цялостна форма',
    'Пилатес за силна коремна мускулатура',
    'Тренировка на долната част на тялото',
    'Кросфит за интензивна подготовка',
  ];

  return (
    <animated.div style={extraServicesAnimation} className="services-container">
      <h2>Екстри</h2>
      <p>
        Разгледайте нашите допълнителни услуги, предлагащи уникални и персонализирани тренировки и програми.
       <p>
        Открийте как да направите вашата тренировка още по-специална.
        </p> 
      </p>
      <ul>
        {specialWorkouts.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
    </animated.div>
  );
}

export default ExtraServices;