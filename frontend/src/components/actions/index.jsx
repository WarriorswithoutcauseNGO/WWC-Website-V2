import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CardsDesktop from "./cardsDesktop";
import CardsPhone from "./cardsPhone";

export default function Actions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when component is at least 20% visible
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        root: null, // viewport
        threshold: 0.2 // 20% visibility
      }
    );

    const currentElement = document.querySelector('[data-component="Actions"]');
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <Box
      data-component="Actions"
      sx={{
        mt: 6,
        mb: 3,
        background: isVisible 
          ? "rgba(230, 242, 242, 0.2)" // Soft teal with slight transparency
          : "transparent",
        transition: "background-color 0.5s ease-in-out",
        padding: "20px 0", // Added padding to ensure background is visible
      }}
    >
      <Typography
        sx={{
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "20px" },
          fontWeight: 700,
          lineHeight: { md: "60.48px", xs: "30px" },
          textAlign: "center",
          width: { md: "60%", xs: "90%" },
          margin: "0 auto",
        }}
      >
        How we empower communities. Our actions for a{" "}
        <span
          style={{
            fontFamily: "DM Serif Display",
            fontWeight: 700,
            textAlign: "center",
            fontStyle: "italic",
            color: "rgba(255, 58, 179, 1)",
          }}
        >
          brighter future.
        </span>
      </Typography>

      {/* Desktop View */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          mt: 4,
          justifyContent: "center",
        }}
      >
        <CardsDesktop />
      </Box>

      {/* Phone View */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          mt: 4,
        }}
      >
        <CardsPhone />
      </Box>
    </Box>
  );
}