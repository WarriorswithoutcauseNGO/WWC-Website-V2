import React, { useEffect } from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import india_map from "../../assets/india_map.png";
import india_map_phn from "../../assets/india_map_phn.png";
import hyderabad from "../../assets/hyderabad.png";
import hyderabad_phn from "../../assets/hyderabad_phn.png";

const AnimatedNumber = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, target, { duration: 1 });
    return animation.stop;
  }, [target, count]);

  return <motion.span>{rounded}</motion.span>;
};

export default function Impact() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Box sx={{ mb: 7, mt: 4 }}>
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
              <AnimatedNumber target={350} /> warriors operating in multiple
              hubs,
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
                <AnimatedNumber target={700} />K +
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
                <AnimatedNumber target={3000} />+
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
                width: { md: "240px", xs: "185px" },
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
                  <AnimatedNumber target={200} />K +
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
                  <AnimatedNumber target={300} />+
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
              style={{ width: isMobile ? "auto" : "235px" }}
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
              <AnimatedNumber target={1000000} />+
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                fontSize: { md: "16px", xs: "14px" },
                fontWeight: "400",
                color: "#FF3AB3",
              }}
            >
              Sanitary pads distributed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
