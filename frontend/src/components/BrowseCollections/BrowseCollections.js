import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import crochetFlowers from '../../assets/crochetFlower.png';
import crochetFlowersPhone from '../../assets/crochetFlowerPhone.png';
import crochetTops from '../../assets/crochetTops.png';
import crochetTopsPhone from '../../assets/crochetTopsPhone.png';
import merch from '../../assets/merch.png';
import merchPhone from '../../assets/merchPhone.png';
import sochLogo from '../../assets/sochLogo.png';
import video from '../../assets/sochVideo.mp4';

const BrowseCollections = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Optional: animate in section when visible
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [mounted]);

  if (!mounted) return null;

  const collectionItems = [
    {
      src: isXsScreen ? merchPhone : merch,
      alt: "Merch",
      text: "MERCH",
      link: "https://www.sochbywwc.com/category/oversized-tees"
    },
    {
      src: isXsScreen ? crochetFlowersPhone : crochetFlowers,
      alt: "Crochet Flowers",
      text: "CROCHET\nFLOWERS",
      link: "https://www.sochbywwc.com/category/crochet-flowers"
    },
    {
      src: isXsScreen ? crochetTopsPhone : crochetTops,
      alt: "Crochet Tops",
      text: "CROCHET\nTOPS",
      link: "https://www.sochbywwc.com/category/crochet-tops"
    }
  ];

  return (
    <Box
      ref={sectionRef}
      sx={{
        backgroundColor: '#FFE9F1',
        width: '100%',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(30px)'
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          py: { xs: 2.5, sm: 3, md: 5.5 },
          px: { xs: 2.5, sm: 3, md: 7.5 }
        }}
      >
        <Grid container spacing={{ xs: 3, md: 5 }} alignItems="stretch">
          {/* Left side - Video */}
          <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                width: '100%',
                height: { xs: '200px', sm: '400px', md: '600px', lg: '880px' },
                position: 'relative'
              }}
            >
              <video
                src={video}
                muted
                autoPlay
                playsInline
                controls
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: isXsScreen ? '310px' : '100%',
                  borderRadius: '30px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              <Box
                component="img"
                src={sochLogo}
                alt="Soch Logo"
                loading="lazy"
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  width: { xs: '50px', md: '80px' },
                  opacity: 0.6,
                  zIndex: 10
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Text + images */}
          <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                width: '100%'
              }}
            >
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: { xs: '32px', md: '48px' },
                    fontWeight: 700,
                    lineHeight: { xs: '40.32px', md: '60.45px' },
                    mb: 3,
                    color: '#000000'
                  }}
                >
                  Each purchase directly supports women artisans, providing them
                  with sustainable livelihoods.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: { xs: '16px', md: '20px' },
                    fontWeight: 400,
                    lineHeight: { xs: '20.16px', md: '25.2px' },
                    mb: 3,
                    color: '#000000'
                  }}
                >
                  Shop from Soch and wear your commitment to making a positive
                  impact today!
                </Typography>

                <a
                  href="https://www.sochbywwc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    sx={{
                      borderRadius: '37px',
                      padding: '10px 20px',
                      backgroundColor: '#FFFFFF',
                      textTransform: 'none',
                      boxShadow: '0px 0px 1.9px 0px #00000040',
                      '&:hover': {
                        backgroundColor: '#F8F8F8',
                        boxShadow: '0px 0px 3px 0px #00000060'
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: '16px',
                        fontWeight: 400,
                        lineHeight: '20.16px',
                        color: '#000000'
                      }}
                    >
                      Browse Collections
                    </Typography>
                  </Button>
                </a>
              </Box>

              {/* Bottom image grid */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '5fr',
                    sm: 'repeat(3, 2fr)'
                  },
                  gap: { xs: 2, md: 2 },
                  width: '100%'
                }}
              >
                {collectionItems.map((item) => (
                  <Box
                    key={item.alt}
                    onClick={() => window.open(item.link, '_blank')}
                    sx={{
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      '&:hover img': {
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        transition: 'transform 0.3s ease',
                        borderRadius: '16px'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        p: 1,
                        whiteSpace: 'pre-line',
                        color: 'white',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: { xs: '27px', md: '32px' },
                        fontWeight: 400,
                        textAlign: 'left',
                        textUnderlinePosition: 'from-font',
                        textDecorationSkipInk: 'none',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                        display: { xs: 'none', sm: 'block' }
                      }}
                    >
                      {item.text}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrowseCollections;
