import React from "react";
import { Box, Typography } from "@mui/material";
import bf_img_1 from "../../assets/bf_img_1.png";
import bf_img_2 from "../../assets/bf_img_2.png";
import bf_img_3 from "../../assets/bf_img_3.png";
import bf_img_4 from "../../assets/bf_img_4.png";
import bf_img_5 from "../../assets/bf_img_5.png";
import "./cardsDesktop.css";

const cards = [
  {
    title: "Zero<br/>Poverty",
    text: '"Charity begins at home," and for us, that means ensuring no one in our community suffers the hardships of poverty. Our programs focus on fostering self-reliance by providing resources, microfinance, and sustainable livelihoods.',
    img: bf_img_1,
    alt: "Zero Poverty",
    gradient: "linear-gradient(135deg, #BF0449 0%, #BF3475 100%)",
  },
  {
    title: "Skill<br/>Development",
    text: "In today's world, knowledge is power. Our skill development initiatives — vocational training, digital literacy, and entrepreneurship — equip individuals with tools to succeed and contribute meaningfully.",
    img: bf_img_2,
    alt: "Skill Development",
    gradient: "linear-gradient(135deg, #F28705 0%, #F2B705 100%)",
  },
  {
    title: "Quality<br/>Education",
    text: 'As Nelson Mandela said, "Education is the most powerful weapon to change the world." We are committed to making quality education a reality for every child by supporting schools, offering scholarships, and nurturing young minds.',
    img: bf_img_3,
    alt: "Quality Education",
    gradient: "linear-gradient(135deg, #BF3475 0%, #BF0449 100%)",
  },
  {
    title: "Good Health &<br/>Sanitation",
    text: "Health is wealth. Our programs focus on clean water, hygiene, and preventive care, building healthier communities. Through clinics, awareness programs, and education on menstrual health, we empower people to live confidently.",
    img: bf_img_4,
    alt: "Good Health & Sanitation",
    gradient: "linear-gradient(135deg, #F2B705 0%, #F28705 100%)",
  },
  {
    title: "Raising Awareness<br/>& Literacy",
    text: "Knowledge is power, and informed communities can move mountains. Our awareness campaigns and literacy programs spark change by educating on gender equality, sustainability, and human rights.",
    img: bf_img_5,
    alt: "Raising Awareness & Literacy",
    gradient: "linear-gradient(135deg, #BF0449 0%, #F28705 100%)",
  },
];

function ActionCard({ title, text, gradient }) {
  return (
    <Box
      className="action-card"
      sx={{
        width: 288,
        height: 380,
        background: gradient,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: "#fff",
          fontFamily: "Sora",
          fontSize: "26px",
          fontWeight: 700,
          lineHeight: "33px",
          mb: 2,
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Typography
        sx={{
          color: "rgba(255,255,255,0.9)",
          fontFamily: "Sora",
          fontSize: "13px",
          fontWeight: 400,
          lineHeight: "20px",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

function ActionImage({ src, alt }) {
  return (
    <Box
      className="action-img-wrap"
      sx={{
        width: 288,
        height: 380,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease, filter 0.4s ease",
        }}
      />
      <Box className="action-img-overlay">
        <Typography
          sx={{
            color: "#fff",
            fontFamily: "Sora",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          {alt}
        </Typography>
      </Box>
    </Box>
  );
}

export default function CardsDesktop() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {/* Row 1: card-img-card-img-card */}
      <Box sx={{ display: "flex", gap: 0, justifyContent: "center" }}>
        <ActionCard {...cards[0]} />
        <ActionImage src={cards[0].img} alt={cards[0].alt} />
        <ActionCard {...cards[1]} />
        <ActionImage src={cards[1].img} alt={cards[1].alt} />
        <ActionCard {...cards[2]} />
      </Box>

      {/* Row 2: img-card-img-card-img */}
      <Box sx={{ display: "flex", gap: 0, justifyContent: "center" }}>
        <ActionImage src={cards[2].img} alt={cards[2].alt} />
        <ActionCard {...cards[3]} />
        <ActionImage src={cards[3].img} alt={cards[3].alt} />
        <ActionCard {...cards[4]} />
        <ActionImage src={cards[4].img} alt={cards[4].alt} />
      </Box>
    </Box>
  );
}
