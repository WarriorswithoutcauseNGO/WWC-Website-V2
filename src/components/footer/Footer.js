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

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{
      backgroundColor: '#E8197A',
      color: 'white',
      padding: isMobile ? '20px' : '40px',
      borderRadius: isMobile ? '20px' : '40px',
      marginLeft:isMobile ?"20px" :"10px",marginRight:isMobile ?"20px" :"10px",
      height:"100%"
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
          <Box sx={{ display: 'flex', gap:'40px' ,mb: 4 }}>
            <NewsletterSection />
            <ContactSection />
          </Box>
          <Box sx={{ display: 'flex', gap:"40px",height:"100%"}}>
            <LocationSection />
            <Box sx={{ display: 'flex', gap: '21px',flexDirection:"column" }}>
              <Box sx={{display:'flex',flexDirection:'row', gap:'40px'}}>
                <SocialsSection />
                <ReadJoinSection />
              </Box>
              <WatermarkSection/>
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
          borderBottomLeftRadius:'8px',
          borderTopLeftRadius:'8px'
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
    <Typography sx={{fontFamily:'Sora, sans-serif', color:"#FFD5ED"}}>+91 9711883411</Typography>
    <Typography sx={{fontFamily:'Sora, sans-serif', color:"#FFD5ED"}}>info.warriorswithoutcause.com</Typography>
    <Typography sx={{fontFamily:'Sora, sans-serif', color:"#FFD5ED"}}>warriorswithoutcause@gmail.com</Typography>
  </Box>
);

const LocationSection = () => (
  <Box sx={{ maxWidth: '350px',height:"100%"}}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      <LocationOnIcon sx={{ mr: 1 }} />
      <Typography>Sarita Vihar, New Delhi</Typography>
    </Box>
    <Box sx={{ width: '100%', height: '150px', backgroundColor: '#ccc', borderRadius: '10px' }}>
    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14024.908360486553!2d77.27964367449631!3d28.529528183769504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce16da7d5a777%3A0xfd0579811db3afe3!2sSarita%20Vihar%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1635768936896!5m2!1sen!2sus"
          width="350px"
          height="200"
          style={{ border: 0, borderRadius: '10px' }}
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
      <IconButton sx={{backgroundColor:'#FFFFFF', borderRadius:"50%"}} color="#000000" size="small"><InstagramIcon /></IconButton>
      <IconButton sx={{backgroundColor:'#FFFFFF', borderRadius:"50%"}} color="#000000" size="small"><YouTubeIcon /></IconButton>
      <IconButton sx={{backgroundColor:'#FFFFFF', borderRadius:"50%"}} color="#000000" size="small"><LinkedInIcon /></IconButton>
      <IconButton sx={{backgroundColor:'#FFFFFF', borderRadius:"50%"}} color="#000000" size="small"><TwitterIcon /></IconButton>
      <IconButton sx={{backgroundColor:'#FFFFFF', borderRadius:"50%"}} color="#000000" size="small"><FacebookIcon /></IconButton>
    </Box>
  </Box>
);

const ReadJoinSection = () => (
  <Box sx={{ display: 'flex', gap: '50px' }}>
    <Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Read</Typography>
      <Box sx={{display:'flex',flexDirection:"column",gap:'3px'}}> 
        <Link to={'/aboutus'} color="inherit" display="block" style={{fontFamily:'Sora, sans-serif', color:"#FFD5ED",textDecoration:'none'}}>About Us</Link>
        <Link href="#" color="inherit" display="block" style={{fontFamily:'Sora, sans-serif', color:"#FFD5ED",textDecoration:'none'}}>Our Drives</Link>
      </Box>
    </Box>
    <Box>
      <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>Join</Typography>
      <Box sx={{display:'flex',flexDirection:"column",gap:'3px'}}> 
        <Link to={'/meettheteam'} color="inherit" display="block" style={{fontFamily:'Sora, sans-serif', color:"#FFD5ED",textDecoration:'none'}}>Team</Link>
        <Link href="#" color="inherit" display="block" style={{fontFamily:'Sora, sans-serif', color:"#FFD5ED",textDecoration:'none'}}>Volunteer</Link>
      </Box>
    </Box>
  </Box>
);
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
          lineHeight:  '145.23px'
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
        <Box sx={{  paddingBottom:"20px",mt: 4, textAlign: 'center',display:'flex',flexDirection: isMobile ? 'column' : 'row',justifyContent:'center', gap:"5px" }}>
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
        <a href='https://quatrodev.vercel.app/' target='_blank' rel="noreferrer">
          Quatro
        </a>
      </Typography>
    </Box>
    )
};

export default Footer;