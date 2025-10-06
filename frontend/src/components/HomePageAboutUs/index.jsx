import { Box, Button, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import about_img_1 from "../../assets/About_img_1.png";
import about_img_2 from "../../assets/About_img_2.png";
import about_img_3 from "../../assets/About_img_3.png";
import about_img_3_phn from "../../assets/About_img_3_ph.png";
import about_img_1_phn from "../../assets/About_img_phn_1.png";

const HomePageAboutUs = () => {
  const isPhone = useMediaQuery("(max-width:768px)");
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
          maxWidth: { md: "50%", xs: "85%" },
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          mt: 20,
        }}
      >
        <h2
          style={{
            fontFamily: "Sora",
            fontSize: isPhone ? "20px" : "48px",
            fontWeight: 700,
            color: "rgba(55,55,55,1)",
          }}
        >
          Founded to{" "}
          <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#fff" }}>
            uplift
          </span>{" "}
          underserved communities
        </h2>

        <p
          style={{
            fontFamily: "Sora",
            fontSize: isPhone ? "16px" : "20px",
            lineHeight: "1.5",
            color: "rgba(55,55,55,1)",
          }}
        >
          Warriorswithoutcause is a PAN India <strong>youth-led NGO</strong> driven by the belief that "We don't need a cause to make a change."
          We've transformed lives with an <strong>army of over 350 warriors</strong> through impactful programs, health camps, educational workshops across India.
        </p>

        {/* SEO-friendly Navigation Button */}
        <Button
          component={RouterLink}
          to="/aboutus"
          sx={{
            width:'fit-content',
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
