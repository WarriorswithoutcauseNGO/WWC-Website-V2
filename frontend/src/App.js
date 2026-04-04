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
import Projects from './pages/Projects/Projects';
import CampaignDetail from './pages/Projects/CampaignDetail';

/** Must match `Navbar` AppBar height (see components/navbar/Navbar.jsx). */
const NAVBAR_HEIGHT_PX = 68;

function App() {
  const location = useLocation();

  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <ScrollToTop />
      <Navbar />

      <Box
        component="main"
        sx={{
          pt: `${NAVBAR_HEIGHT_PX}px`,
          width: '100%',
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage key={location.key} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/howtohelp" element={<HowToHelp />} />
          <Route path="/beherhero" element={<BeHerHero />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CampaignDetail />} />
          <Route path="/donate" element={<Donation />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
