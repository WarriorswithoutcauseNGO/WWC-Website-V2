import React from 'react';
import { Box, Typography, TextField, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import FooterFlower from '../../assets/footerFlower.svg'
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{
      backgroundColor: '#E8197A',
      color: 'white',
      padding: isMobile ? '28px' : '40px',
      borderRadius: isMobile ? '20px' : '40px',
      marginLeft: isMobile ? "20px" : "10px", marginRight: isMobile ? "20px" : "10px",
      height: "100%"
    }}>
      {isMobile ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ContactSection />
          <ReadJoinSection />
          <SocialsSection />
          <NewsletterSection />
          <LocationSection />
          <WatermarkSection />
        </Box>
      ) : (
        // Desktop Layout
        <>
          <Box sx={{ display: 'flex', gap: '40px', mb: 4 }}>
            <NewsletterSection />
            <ContactSection />
          </Box>
          <Box sx={{ display: 'flex', gap: "40px", height: "100%" }}>
            <LocationSection />
            <Box sx={{ display: 'flex', gap: '21px', flexDirection: "column" }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: '40px' }}>
                <SocialsSection />
                <ReadJoinSection />
              </Box>
              <WatermarkSection />
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

const NewsletterSection = () => (
  <Box sx={{ flex: 1, maxWidth: '351px' }}>
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>Sign Up For Our Newsletter</Typography>
    <Box sx={{ display: 'flex' }}>
      <TextField

        placeholder="Email Address"
        variant="outlined"
        fullWidth
        sx={{
          backgroundColor: 'white',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { border: 'none' },
          },
          borderBottomLeftRadius: '8px',
          borderTopLeftRadius: '8px'
        }}
      />
      <Button sx={{ ml: -1, backgroundColor: '#CD0D80', minWidth: '50px' }}>
        <ArrowForwardIcon sx={{ color: '#FFFFFF' }} />
      </Button>
    </Box>
  </Box>
);

const ContactSection = () => (
  <Box>
    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Contact</Typography>
    <Typography sx={{ fontFamily: 'Sora, sans-serif', color: "#FFD5ED" }}>+91 9711883411</Typography>
    <Typography sx={{ fontFamily: 'Sora, sans-serif', color: "#FFD5ED" }}>info.warriorswithoutcause.com</Typography>
    <Typography sx={{ fontFamily: 'Sora, sans-serif', color: "#FFD5ED" }}>Contact@warriorswithoutcause.org</Typography>
  </Box>
);

const LocationSection = () => (
  <Box
    sx={{
      width: { xs: '100%', md: '350px' }, // 100% for small screens, 350px for desktops
      maxWidth: '100%',
      height: '100%'
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <LocationOnIcon sx={{ mr: 1 }} />
      <Typography>Sarita Vihar, New Delhi</Typography>
    </Box>
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        paddingBottom: '56.25%', // Aspect ratio (16:9)
        backgroundColor: '#ccc',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.908360486553!2d77.27964367449631!3d28.529528183769504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce16da7d5a777%3A0xfd0579811db3afe3!2sSarita%20Vihar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1635768936896!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          border: 0,
          borderRadius: '10px',
        }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </Box>
  </Box>
);

const SocialsSection = () => (
  <Box>
    <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Socials</Typography>
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <a href="https://www.instagram.com/warriorswithoutcausengo?igsh=MWFndHJraGh5dDBkeA==" target='_blank' rel='noreferrer'><IconButton sx={{ backgroundColor: '#FFFFFF', borderRadius: "50%" }} color="#000000" size="small"><InstagramIcon /></IconButton></a>
      <a href="https://youtube.com/@warriorswithoutcausengo?feature=shared" target='_blank' rel='noreferrer' ><IconButton sx={{ backgroundColor: '#FFFFFF', borderRadius: "50%" }} color="#000000" size="small"><YouTubeIcon /></IconButton></a>
      <a href="https://www.linkedin.com/company/warriorswithoutcausengo/" target='_blank' rel='noreferrer' ><IconButton sx={{ backgroundColor: '#FFFFFF', borderRadius: "50%" }} color="#000000" size="small"><LinkedInIcon /></IconButton></a>
      <a href="https://x.com/wwcngo" target='_blank' rel='noreferrer' ><IconButton sx={{ backgroundColor: '#FFFFFF', borderRadius: "50%" }} color="#000000" size="small"><TwitterIcon /></IconButton></a>
      <a href="https://m.facebook.com/100088849480693/" target='_blank' rel='noreferrer' ><IconButton sx={{ backgroundColor: '#FFFFFF', borderRadius: "50%" }} color="#000000" size="small"><FacebookIcon /></IconButton></a>
    </Box>
  </Box>
);


const ReadJoinSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <Box sx={{ display: "flex", gap: "50px" }}>
      <Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Read
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <Link
            to="/aboutus"
            color="inherit"
            display="block"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#FFD5ED",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>
          <Typography
            onClick={() => handleScroll("our-drives-section")}
            color="inherit"
            display="block"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#FFD5ED",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Our Drives
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Join
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <Link
            to="/aboutus"
            color="inherit"
            display="block"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#FFD5ED",
              textDecoration: "none",
            }}
          >
            Team
          </Link>
          <Link
            to="/howtohelp"
            color="inherit"
            display="block"
            style={{
              fontFamily: "Sora, sans-serif",
              color: "#FFD5ED",
              textDecoration: "none",
            }}
          >
            Volunteer
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const WatermarkSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      sx={{
        fontSize: isMobile ? '60px' : '120px',
        fontWeight: '900',
        pointerEvents: 'none',
        color: "#C20078",
        lineHeight: isMobile ? "76.5px" : '145.23px',
        fontFamily: "Inter",
      }}
    >
      WWC NGO
    </Typography>
  );
};

export const CopyrightSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ paddingBottom: "20px", mt: 4, textAlign: 'center', display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', gap: "5px" }}>
      <Typography
        variant="body2"
        sx={{
          color: "#191919",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          '& img': {
            height: '1em',
            width: 'auto',
            verticalAlign: 'middle',
          },
          '& a': {
            color: '#191919',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}
      >
        © 2024 WarriorsWithoutCause - All rights reserved
      </Typography>
      <Typography variant="body2"
        sx={{
          color: "#191919",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          '& img': {
            height: '1em',
            width: 'auto',
            verticalAlign: 'middle',
          },
          '& a': {
            color: '#191919',
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
        }}>
        <img src={FooterFlower} alt="Footer Flower" />
        Created by
        <a href='https://www.linkedin.com/company/quatro-web-solutions/' target='_blank' rel="noreferrer">
          Quatro
        </a>
      </Typography>
    </Box>
  )
};

export default Footer;