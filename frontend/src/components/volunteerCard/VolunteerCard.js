import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../../fonts.css";
import VolunteerImg from "../../assets/Volunteer.png";

import heart from "../../assets/heartCard.svg";
import flowerCard from "../../assets/flowerCard.svg";
import handShake from "../../assets/Hanshake.svg";
import clock from "../../assets/clock.svg";
import star from "../../assets/star.svg";

const cardData = [
  {
    icon: heart,
    title: "Make an impact",
    description:
      "Be part of a mission to uplift communities and fight inequality.",
  },
  {
    icon: flowerCard,
    title: "Personal Growth",
    description:
      "Develop new skills and gain valuable experiences while giving back.",
  },
  {
    icon: handShake,
    title: "Build Connections",
    description:
      "Join a network of passionate volunteers and create lasting relationships.",
  },
  {
    icon: clock,
    title: "Flexible Volunteering",
    description:
      "Contribute in ways that fit your schedule, whether on the ground or behind the scenes.",
  },
  {
    icon: star,
    title: "Be the Change",
    description:
      "Help create a better future by directly influencing lives and communities.",
  },
];

const VolunteerCard = ({ reverse = true }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{
      backgroundColor: "#FFF2FA", boxShadow: '0px 10px 13px 0px rgba(0, 0, 0, 0.1)', borderBottomLeftRadius: isMobile ? "40px" : "90px",
      borderBottomRightRadius: isMobile ? "40px" : "90px",
      mb: 3
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : reverse ? "row-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? theme.spacing(3) : theme.spacing(6),

          margin: "0 auto",
          gap: isMobile ? "20px" : "3px",
          px: 8

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
            Volunteer
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "25.2px",
              color: "rgba(77, 77, 77, 1)"
            }}
          >
            Join Warriorswithoutcause (WWC) and become a part of a movement
            dedicated to breaking barriers and empowering communities. As a
            volunteer, you'll gain personal growth, develop new skills, and make
            a lasting impact. Together, we can turn the tide on poverty and
            inequality, creating a future where everyone thrives.
          </Typography>
          <a href="http://docs.google.com/forms/d/e/1FAIpQLSdECsvUceeFUrPORFeOho8wdzTEdFNMBHCr1qsLYThzy8htGQ/viewform?usp=pp_url" target="_blank" rel="noreferrer">
          <Button
            sx={{
              borderRadius: "37px",
              p: "5px 20px",
              fontFamily: "Sora",
              fontSize: "16px",
              fontWeight: 400,
              backgroundColor: "rgba(41, 41, 41, 1)",
              color: "white",
              textTransform: "uppercase",
              margin: "0 auto",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
              mt: 2
            }}
          >

            BECOME A VOLUNTEER
          </Button>
          </a>
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: isMobile ? "100%" : "50%",
          }}
        >
          <img
            src={VolunteerImg}
            alt="Volunteer Image"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: theme.spacing(2),
          margin: "0 auto",
          paddingBottom: "114px",
        }}
      >
        {cardData.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: isMobile ? "340px" : "233px",
              backgroundColor: "#FFEAF7",
              borderRadius: "20px",
              padding: theme.spacing(2),
              display: "flex",
              flexDirection: isMobile ? 'row' : "column",
              textAlign: "left",
              border: "1px solid #FFCEEB",
              gap: isMobile ? '17px' : '0px'
            }}
          >
            <Box>
              <img
                src={card.icon}
                alt={card.title}
                style={{
                  width: isMobile ? "43px" : "63px",
                  height: isMobile ? "39px" : "57px",
                  marginBottom: theme.spacing(1),
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: isMobile ? "20px" : "24px",
                  lineHeight: "30px",
                  fontFamily: "Sora, sans-serif",
                  marginBottom: theme.spacing(1),
                  textAlign: "left",
                  alignItems: "start",
                  color: "#4D4D4D",
                  paddingRight: "60px",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20.16px",
                  fontFamily: "Sora, sans-serif",
                  textAlign: "left",
                  alignItems: "start",
                  color: "#4D4D4D",
                }}
              >
                {card.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default VolunteerCard;
