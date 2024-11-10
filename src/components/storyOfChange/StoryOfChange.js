import React from 'react';
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

// Styled component for the highlighted text
const HighlightedSpan = styled('span')(({ theme }) => ({
  color: theme.palette.warning.light,
}));

const StoryOfChange = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          <Box sx={{ mb: 4 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                textAlign:'center',
                color: '#ABABAB',
                fontSize: { xs: '0.875rem', md: '1.125rem' },
                lineHeight: 1.7,
                mb: 4
              }}
            >
              Our experience with WWC was exceptional. The amount of warmth & love they made us feel at our first meet was overwhelming. Even the students with whom we had our workshop, welcomed us joyfully due to the{' '}
              <HighlightedSpan>encouragement provided
              by the warriors.</HighlightedSpan>{' '} We still remember, our first meet ended with warriors sharing sweets & savoury with us in the joy of the collaboration. A truly commendable job done! 
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
                Avni Shandilya
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'grey.500',
                  fontSize: '0.875rem'
                }}
              >
                Co-Founder, Project साहस
              </Typography>
            </Box>

            {/* Navigation arrows */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
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