import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bf_img_1_phn from "../../assets/bf_img_1_phn.png";
import bf_img_2_phn from "../../assets/bf_img_2_phn.png";
import bf_img_3_phn from "../../assets/bf_img_3_phn.png";
import bf_img_4_phn from "../../assets/bf_img_4_phn.png";
import bf_img_5_phn from "../../assets/bf_img_5_phn.png";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";
import "./cardsPhone.css";

const gradients = [
  "linear-gradient(135deg, #BF0449 0%, #BF3475 100%)",
  "linear-gradient(135deg, #F28705 0%, #F2B705 100%)",
  "linear-gradient(135deg, #BF3475 0%, #BF0449 100%)",
  "linear-gradient(135deg, #F2B705 0%, #F28705 100%)",
  "linear-gradient(135deg, #BF0449 0%, #F28705 100%)",
];

const data = [
  {
    id: 1,
    title: "Zero Poverty",
    text: '"Charity begins at home," and for us, that means ensuring no one in our community suffers the hardships of poverty. Our programs focus on fostering self-reliance by providing resources, microfinance, and sustainable livelihoods.',
    img: bf_img_1_phn,
    link: "/aboutus",
  },
  {
    id: 2,
    title: "Skill Development",
    text: "In today's world, knowledge is power. Our skill development initiatives — vocational training, digital literacy, and entrepreneurship — equip individuals with tools to succeed and contribute meaningfully.",
    img: bf_img_2_phn,
    link: "/howtohelp",
  },
  {
    id: 3,
    title: "Quality Education",
    text: 'As Nelson Mandela said, "Education is the most powerful weapon to change the world." We are committed to making quality education a reality for every child by supporting schools, offering scholarships, and nurturing young minds.',
    img: bf_img_3_phn,
    link: "/aboutus",
  },
  {
    id: 4,
    title: "Good Health & Sanitation",
    text: "Health is wealth. Our programs focus on clean water, hygiene, and preventive care, building healthier communities. Through clinics, awareness programs, and education on menstrual health, we empower people to live confidently.",
    img: bf_img_4_phn,
    link: "/aboutus",
  },
  {
    id: 5,
    title: "Raising Awareness & Literacy",
    text: "Knowledge is power, and informed communities can move mountains. Our awareness campaigns and literacy programs spark change by educating on gender equality, sustainability, and human rights.",
    img: bf_img_5_phn,
    link: "/howtohelp",
  },
];

export default function CardsPhone() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % data.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);

  const handleTitleClick = () => {
    const item = data[currentSlide];
    if (item.link) {
      navigate(item.link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {/* Fixed-height legend to prevent CLS */}
        <div
          className="legend"
          style={{
            padding: "20px",
            color: "white",
            textAlign: "left",
            background: gradients[currentSlide],
            minHeight: "180px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h2
            onClick={handleTitleClick}
            style={{ cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            {data[currentSlide].title}
          </h2>
          <p>{data[currentSlide].text}</p>
        </div>
        <img
          src={data[currentSlide].img}
          alt={data[currentSlide].title}
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            borderRadius: "0",
            display: "block",
          }}
        />
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="prev-btn" aria-label="Previous">
          <img src={left} alt="Previous" />
        </button>
        <button onClick={nextSlide} className="next-btn" aria-label="Next">
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  );
}
