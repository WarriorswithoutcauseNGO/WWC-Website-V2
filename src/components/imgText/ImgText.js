import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AboutUsBg from "../../assets/AboutUsBg.webp";
import HowToHelpBg from "../../assets/HowToHelp.svg";
import '../../fonts.css'

const ImgText = ({ heading, subHeading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const backgroundImage = heading === "About Us" ? AboutUsBg : HowToHelpBg;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      />
      <Box
        sx={{
          position: "relative",
          color: "white",
          // zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Gasoek One",
            fontSize: isMobile ? "55px" : "150px",
            fontWeight: 400,
            lineHeight: isMobile ? "79.64px" : "217.2px",
            textAlign: "left",
            marginBottom: isMobile ? "-36px" : "-100px",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontFamily: "DM Serif Display",
            fontSize: isMobile ? "40px" : "100px",
            fontWeight: 400,
            lineHeight: isMobile ? "54.84px" : "137.1px",
            textAlign: "center",
            color: '#F3D100',
            fontStyle: 'italic',
            position: "relative",
            // zIndex: 2,
          }}
        >
          {subHeading}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImgText;