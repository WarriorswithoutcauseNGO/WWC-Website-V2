import { Box, Typography } from "@mui/material";
import React from "react";

const items = [
  { value: "700K+", label: "Lives touched" },
  { value: "350+", label: "Warriors" },
  { value: "300+", label: "Partners & collabs" },
  { value: "PAN India", label: "Presence" },
];

/**
 * Compact credibility / impact indicators — Larson-adjacent editorial strip.
 */
export default function CredibilityStrip() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        px: { xs: 2, md: 6 },
        background: "linear-gradient(90deg, rgba(191,4,73,0.06) 0%, rgba(242,183,5,0.08) 50%, rgba(191,52,117,0.06) 100%)",
        borderTop: "1px solid rgba(191,4,73,0.1)",
        borderBottom: "1px solid rgba(191,4,73,0.1)",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { xs: "12px", md: "13px" },
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#BF0449",
          mb: 3,
          fontWeight: 600,
        }}
      >
        Impact & credibility
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 3, md: 6 },
          maxWidth: 1000,
          mx: "auto",
        }}
      >
        {items.map((it) => (
          <Box key={it.label} sx={{ textAlign: "center", minWidth: 100 }}>
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: 700,
                background: "linear-gradient(135deg, #BF0449, #F28705)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                lineHeight: 1.1,
              }}
            >
              {it.value}
            </Typography>
            <Typography sx={{ fontFamily: "Sora", fontSize: "13px", color: "#555", mt: 0.5 }}>
              {it.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
