import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import joinWWC from "../../assets/joinWWC.png";
import joinWWC_phn from "../../assets/joinWWC_phn.png";
import { Box, Typography, Button } from "@mui/material";
import "./BecomeWarrior.css";

export default function BecomeWarrior() {
  const [showWarriorText, setShowWarriorText] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowWarriorText(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      textObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        textObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        root: null,
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      visibilityObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        visibilityObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      data-component="BecomeWarrior"
      sx={{
        transition: "background-color 0.5s ease-in-out",
        background: isVisible ? "#232323" : "transparent",
        display: "flex",
        gap: 2,
        padding: { md: "64px 10px 64px 64px", xs: 3 },
        flexDirection: { md: "row", xs: "column" },
        // Add opacity transition for smoother reveal
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Caveat",
              fontSize: { md: "48px", xs: "32px" },
              fontWeight: 400,
              color: "rgba(255, 58, 179, 1)",
              display: "flex",
              justifyContent: "right",
              mr: { md: 18, xs: 6 },
              visibility: showWarriorText ? "visible" : "hidden",
              transition: "opacity 0.5s ease",
              opacity: showWarriorText ? 1 : 0,
              mt: { md: 5, xs: 0 },
            }}
          >
            Warrior
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "48px", xs: "30px" },
              fontWeight: 700,
              lineHeight: "60.48px",
              color: "white",
              display: "flex",
              gap: { md: 2, xs: 1 },
              mt: "-20px",
            }}
          >
            Become a
            <div
              className={`volunteer-div ${
                showWarriorText ? "animate-strike" : ""
              }`}
            >
              <span className="volunteer-span">volunteer</span>
            </div>
          </Typography>
        </Box>

        <Typography
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
            lineHeight: { md: "27.24px", xs: "21.79px" },
            color: "#B5B5B5",
            maxWidth: { md: "88%", xs: "100%" },
          }}
        >
          Joining Warriorswithoutcause NGO offers personal and professional
          growth, allowing you to expand your horizons, contribute to societal
          change, and build valuable networks. You'll gain experience by
          impacting lives and develop a deeper sense of gratitude and purpose
          while connecting with like-minded individuals.
        </Typography>
        <Box sx={{ display: { md: "flex", xs: "none" }, gap: 2 }}>
          <Button
            sx={{
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              textAlign: "left",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
              boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "37px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
                boxShadow: "0px 0px 1.9px 0px #00000040",
              },
            }}
            onClick={() => navigate("/howtohelp")} // Add navigation
          >
            READ MORE
          </Button>

          <a href="http://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url" target="_blank" rel="noreferrer">
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "white",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              textAlign: "left",
              border: "1px solid white",
              cursor: "pointer",
              marginTop: "10px",
              boxShadow: "0px 0px 1.9px 0px #00000040",
              borderRadius: "37px",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              whiteSpace: "nowrap",
              "&:hover": {
                backgroundColor: "white",
                color: "rgba(0, 0, 0, 1)",
                border: "none",
                boxShadow: "0px 0px 1.9px 0px rgba(0, 0, 0, 0.25)",
              },
            }}
          >
            BECOME A WARRIOR
          </Button>
          </a>
        </Box>
      </Box>

      <Box
        component="img"
        src={joinWWC}
        alt="Join WWC"
        sx={{
          display: { xs: "none", md: "block" },
          maxWidth: "100%",
          height: "auto",
        }}
      />

      <Box
        component="img"
        src={joinWWC_phn}
        alt="Join WWC Mobile"
        sx={{
          display: { xs: "block", md: "none" },
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
