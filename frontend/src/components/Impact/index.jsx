import { Box, Typography, useMediaQuery } from "@mui/material";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hyderabad from "../../assets/hyderabad.png";
import hyderabad_phn from "../../assets/hyderabad_phn.png";
import india_map from "../../assets/india_map.svg";
import india_map_phn from "../../assets/india_map_phn.svg";

const AnimatedNumber = ({ target, startAnimation }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (startAnimation) {
      const animation = animate(count, target, { duration: 1 });
      return animation.stop;
    }
  }, [startAnimation, target, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default function Impact() {
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

    const currentElement = document.querySelector('[data-component="Actions"]');

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

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.3 } // Adjust as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        mb: 7,
        mt: 4,
        background: isVisible ? "#FFE9F1" : "transparent",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          fontFamily: "Sora",
          fontSize: { md: "48px", xs: "32px" },
          fontWeight: "700",
          color: "#373737",
          mb: 2,
          mx: { md: 0, xs: 1 },
        }}
      >
        Our impact in a glance
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: { md: "row", xs: "column-reverse" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            width: { md: "39%", xs: "90%" },
            mt: { md: 0, xs: 3 },
          }}
        >
          <img
            src={isMobile ? india_map_phn : india_map}
            alt="India map"
            style={{
              marginBottom: "25px",
              height: isMobile ? "100%" : "498px",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Sora",
              fontSize: { md: "16px", xs: "14px" },
              fontWeight: "400",
              color: "#FF3AB3",
              width: "100%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            With an army of over{" "}
            <span style={{ fontWeight: "700" }}>
              <AnimatedNumber target={350} startAnimation={startAnimation} />{" "}
              warriors operating in multiple hubs,
            </span>{" "}
            we are breaking down barriers and leaving a legacy of compassion and
            impact.
          </Typography>
        </Box>

        <Box>
          <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #FFB4CF",
                background: "#FFC7E7",
                borderRadius: "16px",
                p: { md: 3, xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "48px", xs: "32px" },
                  fontWeight: "700",
                  color: "#FF3AB3",
                  height: { md: "60px", xs: "40px" },
                }}
              >
                <AnimatedNumber target={700} startAnimation={startAnimation} />K
                +
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "16px", xs: "14px" },
                  fontWeight: "400",
                  color: "#FF3AB3",
                }}
              >
                Individuals empowered
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
                border: "1px solid #FFB4CF",
                background: "#FFC7E7",
                borderRadius: "16px",
                p: { md: 3, xs: 1 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "48px", xs: "32px" },
                  fontWeight: "700",
                  color: "#FF3AB3",
                  height: { md: "60px", xs: "40px" },
                }}
              >
                <AnimatedNumber target={3000} startAnimation={startAnimation} />
                +
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sora",
                  fontSize: { md: "16px", xs: "14px" },
                  fontWeight: "400",
                  color: "#FF3AB3",
                }}
              >
                Volunteers engaged
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mr: 1,
                width: { md: "243px", xs: "185px" },
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #FFB4CF",
                  background: "#FFC7E7",
                  borderRadius: "16px",
                  p: { md: 3, xs: 1 },
                  py: { md: 3, xs: 3.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "48px", xs: "32px" },
                    fontWeight: "700",
                    color: "#FF3AB3",
                    height: { md: "60px", xs: "40px" },
                  }}
                >
                  <AnimatedNumber
                    target={200}
                    startAnimation={startAnimation}
                  />
                  K +
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FF3AB3",
                    lineHeight: { md: "20.16px", xs: "15.12px" },
                  }}
                >
                  In salaries provided to slum women
                </Typography>
              </Box>
              <Box
                sx={{
                  textAlign: "center",
                  border: "1px solid #FFB4CF",
                  background: "#FFC7E7",
                  borderRadius: "16px",
                  p: { md: 3, xs: 1 },
                  py: { md: 3, xs: 3.5 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "48px", xs: "32px" },
                    fontWeight: "700",
                    color: "#FF3AB3",
                    height: { md: "60px", xs: "40px" },
                  }}
                >
                  <AnimatedNumber
                    target={300}
                    startAnimation={startAnimation}
                  />
                  +
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    fontSize: { md: "16px", xs: "14px" },
                    fontWeight: "400",
                    color: "#FF3AB3",
                  }}
                >
                  Collaborations done
                </Typography>
              </Box>
            </Box>
            <img
              src={isMobile ? hyderabad_phn : hyderabad}
              alt="Hyderabad"
              style={{ width: isMobile ? "auto" : "219px" }}
            />
          </Box>
          <Box
            sx={{
              textAlign: "center",
              border: "1px solid #FFB4CF",
              background: "#FFC7E7",
              borderRadius: "16px",
              p: { md: 3, xs: 1 },
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { md: "48px", xs: "32px" },
                fontWeight: "700",
                color: "#FF3AB3",
                height: { md: "60px", xs: "40px" },
              }}
            >
              <AnimatedNumber
                target={1000000}
                startAnimation={startAnimation}
              />
              +
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { md: "16px", xs: "14px" },
                fontWeight: "400",
                color: "#FF3AB3",
              }}
            >
              Total funds raised
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
