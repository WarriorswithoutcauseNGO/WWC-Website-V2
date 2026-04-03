import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import '../../fonts.css'

const Cards = ({ title, description, imageSrc, images, imageAlt, reverse = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imgIdx, setImgIdx] = useState(0);
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  const slideImages = images || (imageSrc ? [imageSrc] : []);
  const hasSlideshow = slideImages.length > 1;

  useEffect(() => {
    const el = cardRef.current;
    if (!el || !hasSlideshow) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasSlideshow]);

  useEffect(() => {
    if (!inView || !hasSlideshow) return;
    const iv = setInterval(() => {
      setImgIdx((p) => (p + 1) % slideImages.length);
    }, 3000);
    return () => clearInterval(iv);
  }, [inView, hasSlideshow, slideImages.length]);

  return (
    <Box
      ref={cardRef}
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
            fontSize: { xs: "14px", sm: "16px", md: "20px" },
            lineHeight: { xs: "22px", md: "25.2px" },
            color: "rgba(77, 77, 77, 1)",
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          maxWidth: isMobile ? '100%' : '50%',
          position: 'relative',
          borderRadius: '20px',
          overflow: 'hidden',
          minHeight: hasSlideshow ? { xs: 200, sm: 280, md: 340 } : 'auto',
        }}
      >
        {hasSlideshow ? (
          <>
            {slideImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${imageAlt} ${i + 1}`}
                style={{
                  position: i === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                  opacity: imgIdx === i ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                }}
              />
            ))}
            {/* Dot indicators */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
              }}
            >
              {slideImages.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setImgIdx(i)}
                  sx={{
                    width: imgIdx === i ? 20 : 8,
                    height: 8,
                    borderRadius: '4px',
                    background: imgIdx === i ? '#BF0449' : 'rgba(255,255,255,0.6)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </Box>
          </>
        ) : (
          <img
            src={slideImages[0]}
            alt={imageAlt}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '20px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Cards;
