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
        borderBottomLeftRadius: isMobile ? '40px' : '90px',
        borderBottomRightRadius: isMobile ? '40px' : '90px',
        margin: '0 auto',
        gap: isMobile ? '20px' : '80px',
        boxShadow: '0px 10px 13px 0px rgba(0, 0, 0, 0.1)',
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
          sx={{
            fontFamily: "Sora",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "25.2px",
            color: "rgba(77, 77, 77, 1)"
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
    </Box >
  );
};

export default Cards;