import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const recognitions = [
  { name: "NBC News", type: "Media Feature", color: "#5C6BC0" },
  { name: "TEDx VIPS", type: "Podcast Feature", color: "#E91E63" },
  { name: "Bihar Chhatra Sansad", type: "Felicitation", color: "#FF6F00" },
  { name: "Colgate India", type: "Campaign Partner", color: "#43A047" },
  { name: "Better India", type: "Campaign Partner", color: "#00897B" },
  { name: "Symbiosis Noida", type: "Internship Partner", color: "#7B1FA2" },
  { name: "VIPS", type: "Internship Partner", color: "#1565C0" },
  { name: "Amity University", type: "Internship Partner", color: "#C62828" },
  { name: "Constitution Club of India", type: "Award Venue", color: "#455A64" },
  { name: "Soch by WWC", type: "Social Enterprise", color: "#EC407A" },
];

export default function Recognition() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let animId;
    const step = () => {
      if (!isPaused && scrollRef.current) {
        scrollRef.current.scrollLeft += 0.8;
        const half = scrollRef.current.scrollWidth / 2;
        if (scrollRef.current.scrollLeft >= half) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };
    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  const doubled = [...recognitions, ...recognitions];

  return (
    <Box sx={{ py: { md: 7, xs: 4 }, px: { md: 6, xs: 2 }, overflow: "hidden" }}>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "24px" },
          fontWeight: 700,
          color: "#373737",
          mb: 1,
        }}
      >
        Recognition &{" "}
        <span
          style={{
            fontFamily: "DM Serif Display",
            fontStyle: "italic",
            color: "#E91E63",
          }}
        >
          Collaborations
        </span>
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "16px", xs: "12px" },
          color: "#777",
          mb: 4,
        }}
      >
        Partners, media features, and institutions that stand with us.
      </Typography>

      {/* Auto-scrolling logos/cards */}
      <Box
        sx={{
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: 80,
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background: "linear-gradient(to right, #FFF2FA, transparent)",
          },
          "&::after": {
            right: 0,
            background: "linear-gradient(to left, #FFF2FA, transparent)",
          },
        }}
      >
        <Box
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            display: "flex",
            gap: 2.5,
            overflowX: "hidden",
            py: 2,
            "::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {doubled.map((item, i) => (
            <Box
              key={`${item.name}-${i}`}
              sx={{
                flexShrink: 0,
                width: { md: 220, xs: 170 },
                background: "#fff",
                borderRadius: "16px",
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
                "&:hover": {
                  transform: "translateY(-4px) scale(1.04)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Logo circle with initials */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${item.color}, ${item.color}88)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  {item.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "14px", xs: "12px" },
                  fontWeight: 700,
                  color: "#333",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "11px", xs: "10px" },
                  fontWeight: 500,
                  color: item.color,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {item.type}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
