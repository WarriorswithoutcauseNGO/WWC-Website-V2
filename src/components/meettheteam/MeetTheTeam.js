import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Anusha from "../../assets/Anusha.svg";
import Bhavini from "../../assets/Bhavini.svg";
import Khushi from "../../assets/Khushi.svg";
import Vanshika from "../../assets/Vanshika.svg";
import Ishita from "../../assets/Ishita.svg";
import Manisha from "../../assets/Manisha.svg";
import VanshikaJindal from "../../assets/VanshikaJindal.svg";
import Dakshesh from "../../assets/Dakshesh.svg";

const teamMembers = [
  { name: "Anusha Miree", image: Anusha },
  { name: "Bhavini Singh", image: Bhavini },
  { name: "Khushi Singh", image: Khushi },
  { name: "Vanshika Mehta", image: Vanshika },
  { name: "Ishita Duggal", image: Ishita },
  { name: "Manisha Kumari", image: Manisha },
  { name: "Vanshika Jindal", image: VanshikaJindal },
  { name: "Dakshesh Bhupal", image: Dakshesh },
];

const MeetTheTeam = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: theme.spacing(4),
        backgroundColor: "#FFF5F5",
      }}
    >
      <Box sx={{mb:'22px'}}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: isMobile ? "32px" : "40px",
            lineHeight: isMobile ? "40.32px" : "50.4px",
            textAlign: "center",
            marginBottom: theme.spacing(2),
            fontFamily: "Sora, sans-serif",
            color: "#000000",
          }}
        >
          Meet the team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: isMobile ? "14px" : "16px",
            lineHeight: isMobile ? "20px" : "24px",
            textAlign: "center",
            marginBottom: theme.spacing(4),
            fontFamily: "Sora, sans-serif",
            maxWidth: "800px",
            margin: "0 auto",
            color: "#4D4D4D",
          }}
        >
          Our dedicated team of passionate individuals is driven by a shared
          commitment to uplift communities and create lasting impact
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: theme.spacing(3),
        }}
      >
        {[0, 1].map((rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: theme.spacing(2),
              width: "100%",
            }}
          >
            {teamMembers
              .slice(rowIndex * 4, (rowIndex + 1) * 4)
              .map((member, index) => (
                <Box
                  key={index}
                  sx={{
                    maxWidth: "200px",
                    width: isMobile ? "calc(50% - 8px)" : "calc(25% - 12px)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MeetTheTeam;
