import React from 'react'
import merch from '../../assets/merch.png'
import crochetFlowers from '../../assets/crochetFlower.png'
import crochetTops from '../../assets/crochetTops.png'
import merchPhone from '../../assets/merchPhone.png'
import crochetFlowersPhone from '../../assets/crochetFlowerPhone.png'
import crochetTopsPhone from '../../assets/crochetTopsPhone.png'
import video from '../../assets/testImage.png'
import { Box, Button, Typography, Container, Grid, useTheme, useMediaQuery } from '@mui/material';

const BrowseCollections = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isMdScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Box sx={{ backgroundColor: "#FFE9F1", width: '100%' }}>
      <Container 
        maxWidth="xl" 
        sx={{
          py: { xs: 2.5, sm: 3, md: 5.5 },
          px: { xs: 2.5, sm: 3, md: 7.5 }
        }}
      >
        <Grid 
          container 
          spacing={{ xs: 3, md: 5 }}
          alignItems="stretch"
        >
          {/* Left side - Image */}
          <Grid item xs={12} lg={6} sx={{ display: 'flex' }}>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', lg: 'flex-start' },
                width: '100%',
                height: '100%'
              }}
            >
              <Box
                component="img"
                src={video}
                alt="Featured content"
                sx={{
                  width: '100%',
                  maxWidth: { xs: '310px', md: '661px' },
                  height: 'auto',
                //   objectFit: 'cover'
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Content */}
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
              {/* Text content */}
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: { xs: "32px", md: "48px" },
                    fontWeight: 700,
                    lineHeight: { xs: "40.32px", md: "60.45px" },
                    mb: 3,
                    color: '#000000'
                  }}
                >
                  Each purchase directly supports women artisans, providing them with sustainable livelihoods.
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: 400,
                    lineHeight: { xs: "20.16px", md: "25.2px" },
                    mb: 3,
                    color: '#000000'
                  }}
                >
                  Shop from Soch and wear your commitment to making a positive impact today!
                </Typography>

                <Button
                  sx={{
                    borderRadius: "37px",
                    padding: '10px 20px',
                    backgroundColor: "#FFFFFF",
                    textTransform: 'none',
                    boxShadow: '0px 0px 1.9px 0px #00000040',
                    '&:hover': {
                      backgroundColor: "#F8F8F8",
                      boxShadow: '0px 0px 3px 0px #00000060',
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20.16px",
                      color: '#000000'
                    }}
                  >
                    Browse Collections
                  </Typography>
                </Button>
              </Box>

              {/* Bottom images */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(3, 1fr)',
                  },
                  gap: { xs: 2, md: 2 },
                  width: '100%'
                }}
              >
                <Box
                  component="img"
                  src={isXsScreen ? merchPhone : merch}
                  alt="Merch"
                  sx={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
                <Box
                  component="img"
                  src={isXsScreen ? crochetFlowersPhone : crochetFlowers}
                  alt="Crochet Flowers"
                  sx={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
                <Box
                  component="img"
                  src={isXsScreen ? crochetTopsPhone : crochetTops}
                  alt="Crochet Tops"
                  sx={{
                    width: '100%',
                    height: 'auto'
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BrowseCollections;