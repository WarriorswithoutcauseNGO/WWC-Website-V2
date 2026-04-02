import { Box, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import about_img_1 from "../../assets/About_img_1.png";
import about_img_2 from "../../assets/About_img_2.png";
import about_img_3 from "../../assets/About_img_3.png";
import about_img_3_phn from "../../assets/About_img_3_ph.png";
import about_img_1_phn from "../../assets/About_img_phn_1.png";

const HomePageAboutUs = () => {
  const isPhone = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.2);
      },
      { threshold: 0.2 }
    );

    const el = document.querySelector('[data-component="HomePageAboutUs"]');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Animation Variants
  const slideInFromLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const slideInFromRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const slideInFromBottom = { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } };

  return (
    <Box
      component="section"
      aria-label="About Us Section"
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
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          maxWidth: { md: "38%", xs: "80%" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          mt: 20,
        }}
      >
        <h2
          style={{
            fontFamily: "Sora",
            fontSize: isPhone ? "22px" : "40px",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "rgba(55,55,55,1)",
          }}
        >
          Born from{" "}
          <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#fff" }}>
            compassion,
          </span>{" "}
          driven by{" "}
          <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#fff" }}>
            purpose
          </span>
        </h2>

        <p className = "LearnMoreParagraph"
          style={{
            fontFamily: "Sora",
            fontSize: isPhone ? "14px" : "20px",
            lineHeight: "1.7",
            color: "rgba(55,55,55,1)",
            marginTop: isPhone ? "12px" : "16px",
          }}
        >
          Warriors Without Cause started with a simple truth — you don't need a reason to help someone.
          What began as a handful of young people stepping up has grown into a <strong>350+ strong movement</strong> reaching
          underserved communities across India with health camps, education drives, and real, lasting change.
        </p>

        <Button
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/aboutus");
          }}
          sx={{
            width: "fit-content",
            borderRadius: "37px",
            p: "10px 28px",
            fontFamily: "Sora",
            fontSize: "15px",
            fontWeight: 500,
            backgroundColor: "rgba(41, 41, 41, 1)",
            color: "white",
            textTransform: "uppercase",
            display: "block",
            margin: "16px auto 0",
            cursor: "pointer",
            "&:hover": { backgroundColor: "white", color: "black" },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Desktop Images */}
      {!isPhone && (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
            style={{ position: "absolute", top: "60px", zIndex: 0 }}
          >
            <img src={about_img_1} alt="Volunteers working in the community" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromBottom}
            style={{ position: "absolute", bottom: "-10px", left: "150px", zIndex: 0 }}
          >
            <img src={about_img_3} alt="Community support activities" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
            style={{ position: "absolute", top: "450px", right: "0px", zIndex: 0 }}
          >
            <img src={about_img_2} alt="Team members engaging with community" />
          </motion.div>
        </>
      )}

      {/* Mobile Images */}
      {isPhone && (
        <>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromLeft}
            style={{ position: "absolute", top: "30px", zIndex: 0 }}
          >
            <img src={about_img_1_phn} alt="Volunteers working (mobile view)" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInFromRight}
            style={{ position: "absolute", top: "555px", right: "0px", zIndex: 0 }}
          >
            <img src={about_img_3_phn} alt="Team meeting community (mobile view)" />
          </motion.div>
        </>
      )}
    </Box>
  );
};

export default HomePageAboutUs;
