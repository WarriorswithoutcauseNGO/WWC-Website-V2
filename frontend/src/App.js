import { Box } from '@mui/material';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AboutUs from './pages/AboutUs/AboutUs';
import Donation from './pages/Donation/Donation';
import HomePage from './pages/HomePage/HomePage';
import HowToHelp from './pages/HowToHelp/HowToHelp';
import BeHerHero from './pages/BeHerHero/BeHerHero';
import Blogs from './pages/Blogs/Blogs';
import Newsletter from './pages/Newsletter/Newsletter';

function App() {
  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage key={location.key} />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/howtohelp" element={<HowToHelp />} />
        <Route path="/beherhero" element={<BeHerHero />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/donate" element={<Donation />} />
      </Routes>

      <Footer />
    </Box>
  );
}

export default App;
