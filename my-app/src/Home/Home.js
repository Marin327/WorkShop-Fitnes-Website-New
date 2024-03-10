import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Home = () => {
  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    transform: 'translateX(0%)',
    delay: 2000, // 1 секунда забавяне
  });

  return (
    <animated.div style={homeAnimation} className="home-container">
      <h1>ПРИ НАС Е ИНОВАТИВНО!
        <p>★ DELUXE ★</p>
      </h1>
    </animated.div>
  );
};

export default Home;