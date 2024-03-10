import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import News from './News/News';
import ExpertServices from './ExpertServices/ExpertServices';
import OnlineTraining from './OnlineTraining/OnlineTraining';
import ExtraServices from './ExtraServices/ExtraServices';
import KidsTraining from './KidsTraining/KidsTraining';
import DietList from './DietList/DietList'; 
import Food from './Food/Food';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/expert-services" element={<ExpertServices />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/extra-services" element={<ExtraServices />} />
            <Route path="/kids-training" element={<KidsTraining />} />
            <Route path="/food" element={<Food />} />
            <Route path="/diet-list" element={<DietList />} /> {/* Updated path */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;