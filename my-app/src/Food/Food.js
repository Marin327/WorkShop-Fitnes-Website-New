import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Food = () => {
  const foodAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const dietTypes = [
    'Вегетарианска диета',
    'Веганска диета',
    'Палео диета',
    'Кето диета',
    'Аткинс диета',
    'Сурова храна (Raw food) диета',
    'Медитеранеен диета',
    'Японска диета',
    'Гладуване (Intermittent Fasting)',
    'Дукан диета',
    'Южно-плажанска диета',
    'Майкъл Фелпс диета',
    'Майка Бреди диета',
    'Овесена каша диета',
    '5:2 диета',
  ];

  return (
    <animated.div style={foodAnimation} className="food-container">
      <h2>Хранителни режими</h2>
      <p>
        Разгледайте различните хранителни режими, които предлагаме в нашия фитнес център.
      </p>
      <ul>
        {dietTypes.map((diet, index) => (
          <li key={index}>{diet}</li>
        ))}
      </ul>
    </animated.div>
  );
}

export default Food;