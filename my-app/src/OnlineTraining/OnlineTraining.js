import React from 'react';
import { useSpring, animated } from 'react-spring';

const OnlineTraining = () => {
  const onlineTrainingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  // Примерни данни за онлайн тренировки
  const onlineTrainingData = [
    {
      id: 1,
      title: 'Кардио тренировка за начинаещи',
      instructor: 'Иван Иванов',
      videoUrl: 'https://www.youtube.com/embed/example1',
    },
    {
      id: 2,
      title: 'Силова тренировка със собствено тегло',
      instructor: 'Мария Петрова',
      videoUrl: 'https://www.youtube.com/embed/example2',
    },
    // Добавете още тренировки по ваш избор
  ];

  return (
    <animated.div style={onlineTrainingAnimation} className="services-container">
      <h2>Онлайн тренировки</h2>
      <div className="online-training-list">
        {onlineTrainingData.map((training) => (
          <div key={training.id} className="online-training-item">
            <iframe
              title={training.title}
              width="560"
              height="315"
              src={training.videoUrl}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="training-details">
              <h3>{training.title}</h3>
              <p>Instructor: {training.instructor}</p>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default OnlineTraining;