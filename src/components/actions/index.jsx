import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function actions() {
  return (
    <Box
      sx={{
        mt: 3,
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
    </Box>
  );
}
