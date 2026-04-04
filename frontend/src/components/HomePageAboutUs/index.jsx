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

  const slideInFromLeft = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const slideInFromRight = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0, transition: { duration: 1 } } };
  const slideInFromBottom = { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } };

  const handleLearnMore = () => {
    window.scrollTo(0, 0);
    navigate("/aboutus");
  };

  if (isPhone) {
    return (
      <Box
        component="section"
        aria-label="About Us Section"
        data-component="HomePageAboutUs"
        sx={{
          background: isVisible ? "#BF3475" : "transparent",
          borderRadius: "0 0 0 120px",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
          pt: 4,
          pb: 5,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
        }}
      >
        {/* Top image — small, rounded, inset from left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromLeft}
          style={{
            width: "140px",
            marginLeft: "16px",
            marginBottom: "-20px",
            position: "relative",
            zIndex: 0,
          }}
        >
          <img
            src={about_img_1_phn}
            alt="Volunteers working"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            }}
          />
        </motion.div>

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: 3,
            mt: 4,
          }}
        >
          <h2
            style={{
              fontFamily: "Sora",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1.3,
              color: "#fff",
              margin: 0,
            }}
          >
            Founded to{" "}
            <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#F2B705" }}>
              uplift
            </span>{" "}
            underserved communities
          </h2>

          <p
            className="LearnMoreParagraph"
            style={{
              fontFamily: "Sora",
              fontSize: "15px",
              lineHeight: "1.7",
              color: "rgba(255,255,255,0.92)",
              marginTop: "14px",
              marginBottom: "0",
            }}
          >
            Warriorswithoutcause is a PAN India <strong>youth-led NGO</strong> driven by
            the belief that "We don't need a cause to make a change." We've transformed
            lives with an <strong>army of over 350 warriors</strong> through impactful
            programs, health camps, educational workshops across India.
          </p>

        </Box>

        {/* Bottom image — right aligned */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInFromRight}
          style={{
            width: "130px",
            marginLeft: "auto",
            marginRight: "16px",
            marginTop: "20px",
            position: "relative",
            zIndex: 0,
          }}
        >
          <img
            src={about_img_3_phn}
            alt="Team meeting community"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
            }}
          />
        </motion.div>
      </Box>
    );
  }

  // Desktop view (unchanged)
  return (
    <Box
      component="section"
      aria-label="About Us Section"
      data-component="HomePageAboutUs"
      sx={{
        background: isVisible ? "#BF3475" : "transparent",
        borderRadius: "0px 0px 0px 351px",
        position: "relative",
        padding: "40px 0",
        overflow: "hidden",
        textAlign: "center",
        minHeight: "90vh",
        pt: 15,
        pb: 20,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out, background-color 0.5s ease-in-out",
      }}
    >
      <Box
        sx={{
          maxWidth: "38%",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          mt: 20,
        }}
      >
        <h2
          style={{
            fontFamily: "Sora",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: 1.25,
            color: "#fff",
          }}
        >
          Born from{" "}
          <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#F2B705" }}>
            compassion,
          </span>{" "}
          driven by{" "}
          <span style={{ fontFamily: "DM Serif Text", fontStyle: "italic", fontWeight: 400, color: "#F2B705" }}>
            purpose
          </span>
        </h2>

        <p
          className="LearnMoreParagraph"
          style={{
            fontFamily: "Sora",
            fontSize: "20px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.9)",
            marginTop: "16px",
          }}
        >
          Warriors Without Cause started with a simple truth — you don't need a reason to help someone.
          What began as a handful of young people stepping up has grown into a <strong>350+ strong movement</strong> reaching
          underserved communities across India with health camps, education drives, and real, lasting change.
        </p>

        <Button
          onClick={handleLearnMore}
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
    </Box>
  );
};

export default HomePageAboutUs;
