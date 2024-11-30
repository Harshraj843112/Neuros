import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ForHospital from "./Pages/ForHospital/ForHospitalHome";
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/pagination';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital" element={<ForHospital />} />
      </Routes>
    </div>
  );
};

export default App;
