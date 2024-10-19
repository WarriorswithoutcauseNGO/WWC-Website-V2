import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../../fonts.css'

const Cards = ({ title, description, imageSrc, imageAlt, reverse = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile 
          ? 'column' 
          : reverse ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: isMobile ? theme.spacing(3) : theme.spacing(6),
        backgroundColor: '#FFF2FA',
        borderBottomLeftRadius: isMobile ? '40px' :'90px',
        borderBottomRightRadius: isMobile ? '40px' : '90px',
        // boxShadow: '0px 10px 43px 0px #00000029',
        margin: '0 auto',
        gap: isMobile ? '20px': '80px'
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginRight: isMobile ? 0 : (reverse ? 0 : theme.spacing(4)),
          marginLeft: isMobile ? 0 : (reverse ? theme.spacing(4) : 0),
          marginBottom: isMobile ? theme.spacing(3) : 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: "32px",
            lineHeight: "42.32px",
            marginBottom: theme.spacing(2),
            fontFamily: 'Sora, sans-serif',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Sora, sans-serif',
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          maxWidth: isMobile ? '100%' : '50%',
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '20px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Cards;