import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaHome, FaEnvelope, FaNewspaper, FaUser, FaDesktop, FaStar, FaChild } from 'react-icons/fa';
import ExpertServices from '../ExpertServices/ExpertServices';
import OnlineTraining from '../OnlineTraining/OnlineTraining';
import ExtraServices from '../ExtraServices/ExtraServices';
import KidsTraining from '../KidsTraining/KidsTraining';
import Contact from '../Contact/Contact';
import News from '../News/News';
import Food from '../Food/Food'; 
import DietList from '../DietList/DietList';

import '../App.css';

const Header = () => {
  const [currentContent, setCurrentContent] = useState('home');

  // Animation for the header
  const headerAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  // Handle menu item click
  const handleMenuClick = (content) => {
    setCurrentContent(content);
  };

  return (
    <div>
      {/* Animated header */}
      <animated.header style={headerAnimation} className="header">
        <div className="logo">★ Fitness Deluxe & Spa ★</div>
        {/* Navigation menu */}
        <nav className="navigation">
          <a href="/" onClick={() => handleMenuClick('home')}><FaHome /> Начало </a>
          <a href="/contact" onClick={() => handleMenuClick('contact')}><FaEnvelope /> Контакт </a>
          <a href="/news" onClick={() => handleMenuClick('news')}><FaNewspaper /> Актуално </a>
          <a href="/expert-services" onClick={() => handleMenuClick('expert-services')}><FaUser /> Експертни услуги </a>
          <a href="/online-training" onClick={() => handleMenuClick('online-training')}><FaDesktop /> Онлайн тренировки </a>
          <a href="/extra-services" onClick={() => handleMenuClick('extra-services')}><FaStar /> Екстри </a>
          <a href="/kids-training" onClick={() => handleMenuClick('kids-training')}><FaChild /> KIDS DELUXE </a>
          <a href="/food" onClick={() => handleMenuClick('food')}><FaChild /> Food </a>
          <a href="/diet-list" onClick={() => handleMenuClick('diet-list')}><FaChild /> Диети и храни </a>
        </nav>
      </animated.header>
      
      {/* Conditional rendering based on the selected menu item */}
      {currentContent === 'contact' && <Contact />}
      {currentContent === 'news' && <News />}
      {currentContent === 'expert-services' && <ExpertServices />}
      {currentContent === 'online-training' && <OnlineTraining />}
      {currentContent === 'extra-services' && <ExtraServices />}
      {currentContent === 'kids-training' && <KidsTraining />}
      {currentContent === 'food' && <Food />}
      {currentContent === 'diet-list' && <DietList />}
    </div>
  );
}

export default Header;