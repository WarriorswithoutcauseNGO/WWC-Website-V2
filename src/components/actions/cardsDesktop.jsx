import React from "react";
import { Box, Typography } from "@mui/material";
import bf_card_bg from "../../assets/bf_card_bg.svg";
import bf_img_1 from "../../assets/bf_img_1.svg";
import bf_img_2 from "../../assets/bf_img_2.svg";
import bf_img_3 from "../../assets/bf_img_3.svg";
import bf_img_4 from "../../assets/bf_img_4.svg";
import bf_img_5 from "../../assets/bf_img_5.svg";
import "./cardsDesktop.css";

export default function CardsDesktop() {
  const data = [
    {
      id: 1,
      title: "Zero<br />Poverty",
      text: `"Charity begins at home," and for us, that means ensuring no one in our community suffers the hardships of poverty. Our programs focus on fostering self-reliance by providing resources, microfinance, and sustainable livelihoods.`,
      img: bf_img_1,
    },
    {
      id: 2,
      title: "Skill<br />Development",
      text: `In today's world, knowledge is power. Our skill development initiatives—vocational training, digital literacy, and entrepreneurship—equip individuals with tools to succeed. We're not just filling gaps but building bridges to a future where everyone can stand independently and contribute meaningfully.`,
      img: bf_img_2,
    },
    {
      id: 3,
      title: "Quality<br />Education",
      text: `As Nelson Mandela said, “Education is the most powerful weapon to change the world.” We are committed to making quality education a reality for every child by supporting schools, offering scholarships, nurturing young minds and building a brighter tomorrow.`,
      img: bf_img_3,
    },
    {
      id: 4,
      title: "Good health & <b/>Sanitation",
      text: "Health is wealth. Our programs focus on clean water, hygiene, and preventive care, building healthier communities. Through clinics, awareness programs, and education on menstrual health and sanitation, we empower people to live confidently and face the future.",
      img: bf_img_4,
    },
    {
      id: 5,
      title: "Raising <b/>awareness & <b/>Literacy",
      text: "Knowledge is power, and informed communities can move mountains. Our awareness campaigns and literacy programs spark change by educating on gender equality, sustainability, and human rights.",
      img: bf_img_5,
    },
  ];

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {data.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
          }}
        >
          <Box
            className="card"
            sx={{
              width: "288px",
              height: "380px",
              position: "relative",
              // margin: 2,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "380px",
                bottom: 0,
                backgroundImage: `url(${bf_card_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontWeight: "bold",
                  pl: 2,
                  pt: 3,
                  fontFamily: "Sora",
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "35.28px",
                }}
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </Box>

            <Box
              className="hover-text"
              sx={{
                position: "absolute",
                top: 30,
                left: 0,
                width: "85%",
                height: "100%",
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                padding: 2,
                zIndex: 3,
              }}
            >
              <Typography
                textAlign="left"
                sx={{
                  fontFamily: "Sora",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
          <img src={item.img} alt={item.title} />
        </Box>
      ))}
    </Box>
  );
}
