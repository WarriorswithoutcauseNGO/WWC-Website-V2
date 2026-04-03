import React from "react";
import { Box, Typography } from "@mui/material";

const recognitions = [
  { name: "NBC News", type: "Media Feature", color: "#BF0449" },
  { name: "TEDx VIPS", type: "Podcast Feature", color: "#F28705" },
  { name: "Bihar Chhatra Sansad", type: "Felicitation", color: "#BF3475" },
  { name: "Colgate India", type: "Campaign Partner", color: "#F2B705" },
  { name: "Better India", type: "Campaign Partner", color: "#BF0449" },
  { name: "Symbiosis Noida", type: "Internship Partner", color: "#F28705" },
  { name: "VIPS", type: "Internship Partner", color: "#BF3475" },
  { name: "Amity University", type: "Internship Partner", color: "#BF0449" },
  { name: "Constitution Club of India", type: "Award Venue", color: "#F2B705" },
  { name: "Soch by WWC", type: "Social Enterprise", color: "#BF3475" },
];

const CARD_WIDTH_MD = 220;
const CARD_WIDTH_XS = 170;
const GAP = 20;

export default function Recognition() {
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
            color: "#BF0449",
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

      {/* Auto-scrolling logos/cards — CSS animation for cross-device reliability */}
      <Box
        sx={{
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            width: { md: 80, xs: 40 },
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
        <Box sx={{ overflow: "hidden", py: 2 }}>
          <Box
            sx={{
              display: "flex",
              gap: `${GAP}px`,
              width: "max-content",
              animation: {
                md: `marqueeScroll ${recognitions.length * 3}s linear infinite`,
                xs: `marqueeScrollMobile ${recognitions.length * 3}s linear infinite`,
              },
              "&:hover": {
                animationPlayState: "paused",
              },
              "@keyframes marqueeScroll": {
                "0%": { transform: "translateX(0)" },
                "100%": {
                  transform: `translateX(-${recognitions.length * (CARD_WIDTH_MD + GAP)}px)`,
                },
              },
              "@keyframes marqueeScrollMobile": {
                "0%": { transform: "translateX(0)" },
                "100%": {
                  transform: `translateX(-${recognitions.length * (CARD_WIDTH_XS + GAP)}px)`,
                },
              },
            }}
          >
            {doubled.map((item, i) => (
              <Box
                key={`${item.name}-${i}`}
                sx={{
                  flexShrink: 0,
                  width: { md: CARD_WIDTH_MD, xs: CARD_WIDTH_XS },
                  background: "#fff",
                  borderRadius: "16px",
                  p: { md: 3, xs: 2 },
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
                <Box
                  sx={{
                    width: { md: 56, xs: 44 },
                    height: { md: 56, xs: 44 },
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
                      fontSize: { md: "18px", xs: "14px" },
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
    </Box>
  );
}
