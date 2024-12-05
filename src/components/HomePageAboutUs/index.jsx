import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import about_img_1 from "../../assets/About_img_1.png";
import about_img_2 from "../../assets/About_img_2.png";
import about_img_3 from "../../assets/About_img_3.png";
import about_img_1_phn from "../../assets/About_img_phn_1.png";
import about_img_3_phn from "../../assets/About_img_3_ph.png";

const HomePageAboutUs = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger when component is at least 20% visible
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      {
        root: null, // viewport
        threshold: 0.2, // 20% visibility
      }
    );

    const currentElement = document.querySelector(
      '[data-component="HomePageAboutUs"]'
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const isPhone = useMediaQuery("(max-width:768px)"); // Adjust breakpoint as needed

  const handleLearnMoreClick = () => {
    navigate("/aboutus");
  };

  // Animation Variants for Sliding Effect
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <Box
      data-component="HomePageAboutUs"
      sx={{
        background: isVisible ? "rgba(255, 162, 215, 1)" : "transparent",
        transition: "background-color 0.5s ease-in-out",
        borderRadius: { md: "0px 0px 0px 351px", xs: "0 0 0 202px" },
        position: "relative",
        padding: "40px 0",
        overflow: "hidden",
        textAlign: "center",
        height: "90vh",
        pt: { md: 15, xs: 20 },
        pb: { md: 20, xs: 15 },
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition:
          "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          maxWidth: { md: "50%", xs: "85%" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          mt: 20,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "48px", xs: "20px" },
            fontWeight: 700,
            color: "rgba(55, 55, 55, 1)",
            pb: 2,
            maxWidth: "95%",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Founded to{" "}
          <span
            style={{
              fontFamily: "DM Serif Text",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 1)",
            }}
          >
            uplift
          </span>{" "}
          underserved communities
        </Typography>
        <Typography
          sx={{
            fontFamily: "Sora",
            fontSize: { md: "20px", xs: "16px" },
            fontWeight: 400,
            color: "rgba(55, 55, 55, 1)",
            lineHeight: { md: "25.2px", xs: "20.16px" },
            mb: 3,
          }}
        >
          WarriorsWithoutCause is a PAN India{" "}
          <span style={{ fontWeight: 700 }}>youth-led NGO</span> driven by the
          belief that "We don't need a cause to make a change." We've
          transformed lives with an{" "}
          <span style={{ fontWeight: 700 }}>army of over 350 warriors</span>{" "}
          through impactful programs, health camps, educational workshops across
          India.
        </Typography>
        <Button
          sx={{
            borderRadius: "37px",
            p: "10px 20px",
            fontFamily: "Sora",
            fontSize: "16px",
            fontWeight: 400,
            backgroundColor: "rgba(41, 41, 41, 1)",
            color: "white",
            textTransform: "uppercase",
            display: { xs: "none", md: "block" },
            margin: "0 auto",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
          }}
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </Box>

      {/* Conditionally Render Images Based on Screen Size */}
      {!isPhone && (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
            style={{
              position: "absolute",
              top: "60px",
              zIndex: 0,
              display: "flex",
            }}
          >
            <img src={about_img_1} alt="Warriors at Work" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromBottom}
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "150px",
              zIndex: 0,
              display: "flex",
            }}
          >
            <img src={about_img_3} alt="Community Support" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
            style={{
              position: "absolute",
              top: "450px",
              right: "0px",
              zIndex: 0,
              display: "flex",
            }}
          >
            <img src={about_img_2} alt="Meet the Team" />
          </motion.div>
        </>
      )}

      {isPhone && (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
            style={{
              position: "absolute",
              top: "30px",
              zIndex: 0,
              display: "flex",
            }}
          >
            <img src={about_img_1_phn} alt="Warriors at Work (Phone)" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
            style={{
              position: "absolute",
              top: "555px",
              right: "0px",
              zIndex: 0,
              display: "flex",
            }}
          >
            <img src={about_img_3_phn} alt="Meet the Team (Phone)" />
          </motion.div>
        </>
      )}
    </Box>
  );
};

export default HomePageAboutUs;
