import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer, { CopyrightSection } from './components/footer/Footer';
import InstaFooter from './components/instaFooter/InstaFooter';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AboutUs from './pages/AboutUs/AboutUs';
import Donation from './pages/Donation/Donation';
import HomePage from './pages/HomePage/HomePage';
import HowToHelp from './pages/HowToHelp/HowToHelp';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtohelp" element={<HowToHelp />} />
        <Route path="/donate" element={<Donation />} />
      </Routes>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems:"center",justifyContent:'center' }}>
        <Footer />
        {!isMobile && <InstaFooter />}
      </Box>
      <CopyrightSection />
    </Box>
  );
}

export default App;