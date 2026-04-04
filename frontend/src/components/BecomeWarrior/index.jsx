import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import joinWWC from "../../assets/joinWWC.png";
import joinWWC_phn from "../../assets/joinWWC_phn.png";
import { Box, Typography, Button } from "@mui/material";
import "./BecomeWarrior.css";

export default function BecomeWarrior() {
  const sectionRef = useRef(null);
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
        gap: { md: 4, xs: 2 },
        padding: { md: "64px 10px 64px 64px", xs: 3 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, background 0.5s ease-in-out",
        background: isVisible
          ? "linear-gradient(135deg, #BF0449 0%, #9C0339 50%, #7A0230 100%)"
          : "transparent",
        borderRadius: { md: "24px", xs: "16px" },
        mx: { md: 4, xs: 1 },
        overflow: "hidden",
      }}
    >
      {/* Left content */}
      <Box
        component="article"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Box
          component="h1"
          id="become-warrior-title"
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "48px", xs: "30px" },
            fontWeight: 700,
            lineHeight: "60.48px",
            color: "white",
            display: "flex",
            alignItems: "baseline",
            gap: { md: 2, xs: 1 },
            mt: { md: 5, xs: 0 },
            m: 0,
          }}
        >
          Become a
          <Box sx={{ position: "relative", display: "inline-block" }}>
            <Typography
              component="span"
              sx={{
                fontFamily: "Caveat",
                fontSize: { md: "36px", xs: "24px" },
                fontWeight: 400,
                color: "#F2B705",
                lineHeight: 1,
                position: "absolute",
                top: { md: "-32px", xs: "-22px" },
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                visibility: showWarriorText ? "visible" : "hidden",
                opacity: showWarriorText ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            >
              Warrior
            </Typography>
            <div
              className={`volunteer-div ${showWarriorText ? "animate-strike" : ""}`}
            >
              <span className="volunteer-span">volunteer</span>
            </div>
          </Box>
        </Box>

        <Typography
          component="p"
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "18px", xs: "15px" },
            fontWeight: 400,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.75)",
            maxWidth: { md: "88%", xs: "100%" },
          }}
        >
          Joining Warriors Without Cause offers personal and professional growth,
          allowing you to expand your horizons, contribute to societal change,
          and build valuable networks. You'll gain experience by impacting lives
          and develop a deeper sense of gratitude and purpose while connecting
          with like-minded individuals.
        </Typography>

        <Box sx={{ mt: 1 }}>
          <Button
            component="a"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              background: "linear-gradient(135deg, #F2B705, #F28705)",
              color: "#fff",
              padding: "12px 32px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "20.16px",
              borderRadius: "37px",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              boxShadow: "0 4px 16px rgba(242,183,5,0.35)",
              "&:hover": {
                background: "linear-gradient(135deg, #D49A04, #D47504)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 20px rgba(242,183,5,0.45)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Become a Warrior
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
          maxWidth: "48%",
          height: "auto",
          borderRadius: "16px",
          objectFit: "cover",
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
          borderRadius: "12px",
        }}
      />
    </Box>
  );
}
