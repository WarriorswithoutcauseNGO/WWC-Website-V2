import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import HowToHelp from './pages/HowToHelp/HowToHelp';
import Footer from './components/footer/Footer';
import { CopyrightSection } from './components/footer/Footer'
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtohelp" element={<HowToHelp />} />
      </Routes>
      <Footer />
      <CopyrightSection />
    </Box>
  );
}

export default App;