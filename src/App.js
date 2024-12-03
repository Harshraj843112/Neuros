/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ForHospital from "./Pages/ForHospital/ForHospitalHome";
import 'swiper/css';
import 'swiper/css/navigation';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css/pagination';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital" element={<ForHospital />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
