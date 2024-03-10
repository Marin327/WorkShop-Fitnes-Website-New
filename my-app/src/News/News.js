import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const News = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const newsAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const newsList = [
    'Откриване на нов фитнес център',
    'Нов треньор със звезден статус в екипа ни',
    'Специална промоция за нови клиенти',
    'Ден на отворените врати - бъдете наши гости',
    'Нови тренировъчни програми за начинаещи',
    'Участие в състезание "Спортник на годината"',
    'Ексклузивно интервю с нашия основен треньор',
    'Организиране на фитнес камп в планината',
    'Тематични тренировки по време на празниците',
    'Обновяване на оборудването в залата',
  ];

  const toggleMenuVisibility = () => {
    setMenuVisibility(!isMenuVisible);
  };

  return (
    <animated.div style={newsAnimation} className="news-container">
      <p>
        Добре дошли в раздела с новини на Fitness Deluxe & Spa. 
      </p>
      <p>
        Тук можем да ви информираме за последните трендове във фитнес индустрията, интересни факти и предстоящи събития.
      </p>
      <ul>
        {newsList.map((news, index) => (
          <li key={index} onClick={toggleMenuVisibility}>
            {news}
            {isMenuVisible && (
              <animated.div className="news-menu">
                {/* Вашето меню с информация */}
                <p>Допълнителна информация за новината...</p>
              </animated.div>
            )}
          </li>
        ))}
      </ul>
    </animated.div>
  );
}

export default News;