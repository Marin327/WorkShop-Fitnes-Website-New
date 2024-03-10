import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const KidsTraining = () => {
  const kidsTrainingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  return (
    <animated.div style={kidsTrainingAnimation} className="services-container">
      <h2>KIDS тренировки</h2>
      <p>
        Предоставете на вашите деца възможността да се забавляват и учат чрез нашите KIDS тренировки,
        създадени специално за тях.
      </p>
      <ul>
        <li>Забавни физически игри</li>
        <li>Танци и ритъм</li>
        <li>Основи на спорта за деца</li>
        <li>Координация и баланс</li>
        <li>Тимбилдинг упражнения</li>
        <li>Специални събития и празници</li>
        <li>Креативни изразителни дейности</li>
        <li>Интерактивни уроци за здравословен начин на живот</li>
        <li>Развиване на социални умения</li>
        <li>Индивидуални консултации с инструктор</li>
      </ul>
    </animated.div>
  );
}

export default KidsTraining;
