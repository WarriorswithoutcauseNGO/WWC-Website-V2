import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import Navbar from './components/navbar/Navbar';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Donation from './pages/Donation/Donation';
import HowToHelp from './pages/HowToHelp/HowToHelp';
import Footer from './components/footer/Footer';
import { CopyrightSection } from './components/footer/Footer';
import { Box } from '@mui/material';
import InstaFooter from './components/instaFooter/InstaFooter';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtohelp" element={<HowToHelp />} />
        <Route path="/donate" element={<Donation />} />
      </Routes>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Footer />
        {!isMobile && <InstaFooter />}
      </Box>
      <CopyrightSection />
    </Box>
  );
}

export default App;