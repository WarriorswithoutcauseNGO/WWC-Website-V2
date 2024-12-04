import React from "react";
import { Box, Typography } from "@mui/material";
import CardsDesktop from "./cardsDesktop";
import CardsPhone from "./cardsPhone";

export default function Actions() {
  return (
    <Box
      sx={{
        mt: 6,
        mb: 3,
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
