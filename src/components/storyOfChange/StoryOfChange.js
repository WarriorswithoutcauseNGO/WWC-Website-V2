import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  IconButton, 
  Container,
  useTheme,
  useMediaQuery,
  styled
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Updated Styled component for the highlighted text with gradient background
const HighlightedSpan = styled('span')(({ theme }) => ({
  background: 'linear-gradient(90.33deg, #FFD600 73.29%, #FFF6C7 98.13%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
  fontWeight: 600,
}));

const testimonials = [
  {
    text: "Our experience with WWC was exceptional. The amount of warmth & love they made us feel at our first meet was overwhelming. Even the students with whom we had our workshop, welcomed us joyfully due to the {encouragement provided by the warriors}. We still remember, our first meet ended with warriors sharing sweets & savoury with us in the joy of the collaboration. A truly commendable job done!",
    author: "Avni Shandilya",
    position: "Co-Founder, Project साहस"
  },
  {
    text: "We have greatly valued our collaboration and are proud of the {positive impact we've made together} on so many lives. Overall, we at Aashray Foundation look forward to continuing our work with you and making even greater strides together.",
    author: "Aashray Foundation ",
    position: ""
  },
  {
    text: "I've had the privilege of being part of WWC for 3.5 years, witnessing its growth from a small internship program to a {force for change}. I've seen firsthand the impact of our efforts, from fundraisers to community aid, and sustainable fashion initiatives. My experience has been transformative, and I highly recommend joining this amazing team to make a difference.",
    author: "Radhika Tirthani",
    position: "Social Media & Content Dept."
  },
  {
    text: "{The team here is more than just coworkers—they're like family}, and together, we're working toward something meaningful. Every day, I'm surrounded by passionate individuals who inspire me to push boundaries and think beyond limits. It's been a rewarding and transformative experience, one that has profoundly influenced my perspective on life and leadership.",
    author: "Avni Vohra",
    position: "Research & Outreach Head"
  }
];

const StoryOfChange = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to parse and highlight text
  const parseHighlightedText = (text) => {
    const parts = text.split(/(\{.*?\})/g);
    return parts.map((part, index) => {
      if (part.startsWith('{') && part.endsWith('}')) {
        return (
          <HighlightedSpan key={index}>
            {part.slice(1, -1)}
          </HighlightedSpan>
        );
      }
      return part;
    });
  };

  const current = testimonials[currentTestimonial];

  return (
    <Box sx={{ 
      bgcolor: '#232323',
      color: '#FFFFFF',
      py: { xs: 4, md: 8 },
      px: { xs: 2, md: 4 }
    }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: '4xl', mx: 'auto' }}>
          {/* Title */}
          <Typography 
            sx={{ 
              textAlign:"center",
              fontSize: isMobile ? "32px" : "48px",
              lineHeight:isMobile ? "40.32px" : "60.84px",
              fontWeight: 700,
              mb: isMobile ? "30px" : '52px',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            Stories of change
          </Typography>

          {/* Content */}
          <Box sx={{ 
            mb: 4, 
            minHeight: { xs: '200px', md: '250px' }, 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign:'center',
                color: '#ABABAB',
                fontSize: { xs: '0.875rem', md: '1.125rem' },
                lineHeight: 1.7,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxHeight: { xs: '150px', md: '200px' },
              }}
            >
              {parseHighlightedText(current.text)}
            </Typography>
          </Box>

          {/* Author info and navigation */}
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4
            }}
          >
            {/* Author details */}
            <Box>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 500,
                  color: 'white'
                }}
              >
                {current.author}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'grey.500',
                  fontSize: '0.875rem'
                }}
              >
                {current.position}
              </Typography>
            </Box>

            {/* Navigation arrows */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                onClick={handlePrevious}
                aria-label="Previous story"
                sx={{ 
                  color: 'white',
                  border: '1px solid',
                  borderColor: 'grey.600',
                  '&:hover': {
                    borderColor: 'grey.400',
                  }
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton 
                onClick={handleNext}
                aria-label="Next story"
                sx={{ 
                  color: 'white',
                  border: '1px solid',
                  borderColor: 'grey.600',
                  '&:hover': {
                    borderColor: 'grey.400',
                  }
                }}
              >
                <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StoryOfChange;