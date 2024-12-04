import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import "../../fonts.css";
import HTHimg from "../../assets/hthcard2.webp";
import pay from "../../assets/pay.svg";

const HTHcard = ({ title, description, imageSrc, imageAlt, reverse = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contribution-section" } });
    } else {
      scrollTo("contribution-section");
    }
  };

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isMobile ? theme.spacing(3) : theme.spacing(6),
        backgroundColor: "#FFF2FA",
        margin: "0 auto",
        gap: isMobile ? "20px" : "80px",
      }}
    >
      <Box
        sx={{
          flex: 1,
          marginRight: isMobile ? 0 : reverse ? 0 : theme.spacing(4),
          marginLeft: isMobile ? 0 : reverse ? theme.spacing(4) : 0,
          marginBottom: isMobile ? theme.spacing(3) : 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "32px",
            lineHeight: "42.32px",
            marginBottom: theme.spacing(2),
            fontFamily: "Sora, sans-serif",
          }}
        >
          Donate
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Sora, sans-serif",
          }}
        >
          Your donation helps Warriorswithoutcause (WWC) provide education,
          healthcare, and opportunities to underserved communities. Every
          contribution makes a real difference—whether it's empowering women
          with skills, offering healthcare, or supporting a child's education.
          Join us in making a lasting impact and building a brighter, more
          equal future for all.
        </Typography>
        <Button
          sx={{
            backgroundColor: "#292929",
            color: "#FFFFFF",
            borderRadius: "37px",
            padding: "10px 20px",
            mt: "16px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            "&:hover": {
              backgroundColor: "#3a3a3a",
            },
          }}
          onClick={scrollToSection}
        >
          <img
            src={pay}
            alt="Pay icon"
            style={{ height: "20px", width: "auto" }}
          />
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "20px",
              fontFamily: "Sora, sans-serif",
            }}
          >
            DONATE NOW
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          flex: 1,
          maxWidth: isMobile ? "100%" : "50%",
        }}
      >
        <img
          src={HTHimg}
          alt={"How to Help"}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HTHcard;
