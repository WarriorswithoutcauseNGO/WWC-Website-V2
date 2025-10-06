import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import joinWWC from "../../assets/joinWWC.png";
import joinWWC_phn from "../../assets/joinWWC_phn.png";
import { Box, Typography, Button } from "@mui/material";
import "./BecomeWarrior.css";

export default function BecomeWarrior() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [isVisible, setIsVisible] = useState(false);
  const [showWarriorText, setShowWarriorText] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsVisible(false);
      setShowWarriorText(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio > 0.2;
        setIsVisible(visible);
        setShowWarriorText(visible);
      },
      { threshold: 0.3 }
    );

    const ref = sectionRef.current;
    if (ref) observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <Box
      component="section"
      ref={sectionRef}
      aria-labelledby="become-warrior-title"
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        gap: 2,
        padding: { md: "64px 10px 64px 64px", xs: 3 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
        backgroundColor: isVisible ? "#232323" : "transparent",
      }}
    >
      {/* Left content */}
      <Box component="article" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            component="h2"
            id="become-warrior-title"
            sx={{
              fontFamily: "Caveat",
              fontSize: { md: "48px", xs: "32px" },
              fontWeight: 400,
              color: "rgba(255, 58, 179, 1)",
              display: "flex",
              justifyContent: "right",
              mr: { md: 18, xs: 6 },
              visibility: showWarriorText ? "visible" : "hidden",
              opacity: showWarriorText ? 1 : 0,
              transition: "opacity 0.5s ease",
              mt: { md: 5, xs: 0 },
            }}
          >
            Warrior
          </Typography>

          <Typography
            component="h1"
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
              className={`volunteer-div ${showWarriorText ? "animate-strike" : ""}`}
            >
              <span className="volunteer-span">volunteer</span>
            </div>
          </Typography>
        </Box>

        <Typography
          component="p"
          sx={{
            fontFamily: "Noto Sans",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
            lineHeight: { md: "27.24px", xs: "21.79px" },
            color: "#B5B5B5",
            maxWidth: { md: "88%", xs: "100%" },
          }}
        >
          Joining Warriorswithoutcause NGO offers personal and professional growth,
          allowing you to expand your horizons, contribute to societal change,
          and build valuable networks. You'll gain experience by impacting lives
          and develop a deeper sense of gratitude and purpose while connecting
          with like-minded individuals.
        </Typography>

        <Box sx={{ display: { md: "flex", xs: "none" }, gap: 2 }}>
          <Button
            component="a"
            href="/howtohelp"
            sx={{
              backgroundColor: "white",
              color: "rgba(0, 0, 0, 1)",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              borderRadius: "37px",
              textTransform: "uppercase",
              boxShadow: "0px 0px 1.9px 0px rgba(0,0,0,0.25)",
              "&:hover": {
                backgroundColor: "transparent",
                color: "white",
                border: "1px solid white",
              },
            }}
          >
            READ MORE
          </Button>

          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              padding: "10px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "20.16px",
              border: "1px solid white",
              borderRadius: "37px",
              textTransform: "uppercase",
              boxShadow: "0px 0px 1.9px 0px #00000040",
              "&:hover": {
                backgroundColor: "white",
                color: "rgba(0,0,0,1)",
                border: "none",
                boxShadow: "0px 0px 1.9px 0px rgba(0,0,0,0.25)",
              },
            }}
          >
            BECOME A WARRIOR
          </Button>
        </Box>
      </Box>

      {/* Images */}
      <Box
        component="img"
        src={joinWWC}
        alt="Join Warriors Without Cause"
        loading="lazy"
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
        loading="lazy"
        sx={{
          display: { xs: "block", md: "none" },
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
}
