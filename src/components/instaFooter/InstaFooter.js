import React, { useState, useEffect } from 'react';
import { Box, Link, Typography } from '@mui/material';
import carasolImg1 from '../../assets/carasol1.jpg';
import carasolImg2 from '../../assets/carasol2.jpg';
import carasolImg3 from '../../assets/carasol3.jpg';
import instaLogo from '../../assets/InstagramLogo.png';

const InstaFooter = () => {
  const images = [carasolImg1, carasolImg2, carasolImg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '329px',
        height: '465px',
        borderRadius: '17px',
        overflow: 'hidden',
        margin: 'auto', // Center the carousel
        position: 'relative'
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Carousel image ${index + 1}`}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      ))}

      <Box>
        <Link
            href="https://www.instagram.com/warriorswithoutcausengo?igsh=MWFndHJraGh5dDBkeA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            display: 'flex',
            alignItems: 'center',
            color: 'inherit',
            textDecoration: 'none'
            }}
        >   
        <Box  sx={{backgroundColor:'#FFFFFFAB',border: '1px solid #D6D6D6',borderRadius:'28px', display:"flex",flexDirection:"row",alignItems:'center',padding:'5px',gap:'5px'}}>
            <img src={instaLogo} alt="Instagram Logo" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
            <Typography sx={{color:"#D90082",textAlign: "left",
                fontFamily: "Inter",
                fontSize: "13px",
                fontWeight: 700,
                lineHeight: "15.73px",}}>@warriorswithoutcausengo</Typography>
        </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default InstaFooter;