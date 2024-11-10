import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const milestoneData = [
  {
    id: 1,
    title: "BEAT THE HEAT CAMPAIGN",
    description: "During Delhi’s record-breaking heatwaves, WWC launched the Beat the Heat campaign, distributing over 1,000 umbrellas, caps, and slippers to local vendors and vulnerable populations. The campaign also included organising over 20 sharbat drives and placing water bowls for birds and dogs.",
    bgColor: "#007656"
  },
  {
    id: 2,
    title: "POSH AWARENESS SESSIONS",
    description: "WWC conducted comprehensive sessions on the Prevention of Sexual Harassment (POSH) across various organizations, focusing on ensuring awareness, safety, and well-being in professional environments.",
    bgColor: "#FFCCDD"
  },
  {
    id: 3,
    title: "CLEANLINESS DRIVES",
    description: "WWC successfully organised cleanliness drives in locations like Sunder Vans, Yamuna Ghat, and Dwarka Forest, focusing on environmental preservation and promoting community involvement in maintaining clean and green public spaces",
    bgColor: "#FF4D00"
  },
  {
    id: 4,
    title: "GLOBAL RECOGNITION",
    description: "WWC gained global recognition by being featured on NBC News, which amplified its mission on an international platform. Additionally, WWC shared its journey and vision through a podcast with TEDx VIPS at Indraprastha University.",
    bgColor: "#5737AF"
  },
  {
    id: 5,
    title: "CERVICAL CANCER AWARENESS",
    description: "WWC raised awareness about cervical cancer in Delhi’s slums, empowering women with essential information for early detection and prevention, contributing to improved health outcomes",
    bgColor: "#F9BE27"
  },
  {
    id: 6,
    title: "MENSTRUAL HYGIENE DAY INITIATIVES",
    description: "On Menstrual Hygiene Day, WWC distributed sanitary products to underprivileged women, conducted awareness sessions, and championed menstrual hygiene by serving over 500+ women.",
    bgColor: "#FEF5E7"
  },
  {
    id: 7,
    title: "DOG DRIVES",
    description: "WWC conducted Dog Drives, providing essential care such as deworming to over 100 stray dogs, ensuring their well-being and health in the community.",
    bgColor: "#E91E63"
  },
  {
    id: 8,
    title: "FELICITATION BY BIHAR CHHATRA SANSAD",
    description: "On March 22, 2024, WWC was honoured during Bihar Utsav at the Constitution Club of India by Bihar Chhatra Sansad, in recognition of its impactful contributions to society.",
    bgColor: "#D0D5FF"
  },
  {
    id: 9,
    title: "INTERNSHIP PROGRAMS",
    description: "WWC hosted internship programs in collaboration with institutions like Symbiosis Noida, VIPS, and Amity, providing valuable learning opportunities for students and fostering the next generation of social changemakers",
    bgColor: "#353535"
  },
  {
    id: 10,
    title: "WINTER RELIEF EFFORTS",
    description: "During the harsh winter months, WWC distributed over 300 mufflers and socks, providing warmth and comfort to those in need, ensuring they were cared for during the coldest times of the year.",
    bgColor: "#82A5FF"
  },
  {
    id: 11,
    title: "SELF-DEFENSE WORKSHOPS",
    description: "In its adopted slums, WWC organised self-defence workshops, equipping over 300 individuals with the necessary skills for safety and protection, empowering them to defend themselves in threatening situations.",
    bgColor: "#FF4D4D"
  }
];

const MileStone = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    let scrollInterval;
    
    if (!isPaused && !isMobile) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 1;

          // Reset scroll position when reaching end
          const scrollWidth = scrollRef.current.scrollWidth / 2; // Divide by 2 because we duplicated the items
          if (scrollRef.current.scrollLeft >= scrollWidth) {
            scrollRef.current.scrollLeft = 0;
          }
        }
      }, 30);
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused, isMobile]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % milestoneData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + milestoneData.length) % milestoneData.length);
  };

  const renderCard = (milestone, showNumber = true) => (
    <Box
      sx={{
        bgcolor: milestone.bgColor,
        borderRadius: '16px',
        p: 3,
        height: isMobile ? "366px" : "277px",
        maxWidth: '350px',
        minHeight: '250px',
        display: 'flex',
        flexDirection: 'column',
        gap: "10px",
        position: 'relative',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      {showNumber && (
        <Typography
          sx={{
            position: 'absolute',
            top: '16px',
            left: '23px',
            color: [1, 3, 4, 7, 9, 10, 11].includes(milestone.id) ? '#FEF5E7' : '#1B1B1B',
            fontSize: '64px',
            fontWeight: 700,
            opacity: 0.9,
            lineHeight: "80.64px",
            fontFamily: 'Sora, sans-serif',
          }}
        >
          {milestone.id}
        </Typography>
      )}
      <Typography
        variant="h3"
        sx={{
          color: [1, 3, 4, 7, 9, 10, 11].includes(milestone.id) ? '#FEF5E7' : '#1B1B1B',
          fontSize: '24px',
          fontWeight: 700,
          mb: 2,
          fontFamily: 'Sora, sans-serif',
          mt: 9  // Add space for the number
        }}
      >
        {milestone.title}
      </Typography>
      <Typography
        sx={{
          color: [1, 3, 4, 7, 9, 10, 11].includes(milestone.id) ? '#FEF5E7' : '#1B1B1B',
          fontSize: '14px',
          lineHeight: 1.5,
          fontFamily: 'Sora, sans-serif',
        }}
      >
        {milestone.description}
      </Typography>
    </Box>
  );
  

  return (
    <Box sx={{ bgcolor: '#232323', p: 4, overflow: 'hidden' }}>
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontSize: { xs: '28px', md: '48px' },
          fontWeight: 700,
          mb: 4,
          textAlign: isMobile ? 'left' : 'center',
          fontFamily: 'Sora, sans-serif',
        }}
      >
        Milestone Events and Impactful Moments
      </Typography>

      {isMobile ? (
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {renderCard(milestoneData[activeIndex])}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <IconButton 
                onClick={handlePrev}
                sx={{ 
                  bgcolor: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' }
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton 
                onClick={handleNext}
                sx={{ 
                  bgcolor: 'white',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.8)' }
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: '100px',
              background: 'linear-gradient(to right, transparent, #232323)',
              pointerEvents: 'none',
              zIndex: 1
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              height: '100%',
              width: '100px',
              background: 'linear-gradient(to left, transparent, #232323)',
              pointerEvents: 'none',
              zIndex: 1
            }
          }}
        >
          <Box
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            sx={{
              display: 'flex',
              gap: 2,
              overflowX: 'hidden',
              scrollBehavior: 'smooth',
              '::-webkit-scrollbar': {
                display: 'none'
              },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              py: 2,
            }}
          >
            {[...milestoneData, ...milestoneData].map((milestone, index) => (
              <Box
                key={`${milestone.id}-${index}`}
                sx={{
                  flexShrink: 0
                }}
              >
                {renderCard(milestone)}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default MileStone;