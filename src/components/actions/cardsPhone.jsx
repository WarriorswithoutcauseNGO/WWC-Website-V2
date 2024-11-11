import React, { useState, useEffect } from "react";
import bf_img_1 from "../../assets/bf_img_1.png";
import bf_img_2 from "../../assets/bf_img_2.png";
import bf_img_3 from "../../assets/bf_img_3.png";
import bf_img_4 from "../../assets/bf_img_4.png";
import bf_img_5 from "../../assets/bf_img_5.png";
import bf_img_1_phn from "../../assets/bf_img_1_phn.png";
import bf_img_2_phn from "../../assets/bf_img_2_phn.png";
import bf_img_3_phn from "../../assets/bf_img_3_phn.png";
import bf_img_4_phn from "../../assets/bf_img_4_phn.png";
import bf_img_5_phn from "../../assets/bf_img_5_phn.png";
import bg from "../../assets/bf_card_bg.svg";
import right from "../../assets/right.svg";
import left from "../../assets/left.svg";

import "./cardsPhone.css";

export default function CardsPhone() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPhoneView, setIsPhoneView] = useState(window.innerWidth <= 768);

  const data = [
    {
      id: 1,
      title: "Zero Poverty",
      text: `"Charity begins at home," and for us, that means ensuring no one in our community suffers the hardships of poverty. Our programs focus on fostering self-reliance by providing resources, microfinance, and sustainable livelihoods.`,
      img: isPhoneView ? bf_img_1_phn : bf_img_1,
    },
    {
      id: 2,
      title: "Skill Development",
      text: `In today's world, knowledge is power. Our skill development initiatives—vocational training, digital literacy, and entrepreneurship—equip individuals with tools to succeed. We're not just filling gaps but building bridges to a future where everyone can stand independently and contribute meaningfully.`,
      img: isPhoneView ? bf_img_2_phn : bf_img_2,
    },
    {
      id: 3,
      title: "Quality Education",
      text: `As Nelson Mandela said, “Education is the most powerful weapon to change the world.” We are committed to making quality education a reality for every child by supporting schools, offering scholarships, nurturing young minds and building a brighter tomorrow.`,
      img: isPhoneView ? bf_img_3_phn : bf_img_3,
    },
    {
      id: 4,
      title: "Good Health & Sanitation",
      text: "Health is wealth. Our programs focus on clean water, hygiene, and preventive care, building healthier communities. Through clinics, awareness programs, and education on menstrual health and sanitation, we empower people to live confidently and face the future.",
      img: isPhoneView ? bf_img_4_phn : bf_img_4,
    },
    {
      id: 5,
      title: "Raising Awareness & Literacy",
      text: "Knowledge is power, and informed communities can move mountains. Our awareness campaigns and literacy programs spark change by educating on gender equality, sustainability, and human rights.",
      img: isPhoneView ? bf_img_5_phn : bf_img_5,
    },
  ];

  useEffect(() => {
    const handleResize = () => setIsPhoneView(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + data.length) % data.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <div
          className="legend"
          style={{
            padding: "20px",
            color: "white",
            textAlign: "left",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 2,
          }}
        >
          <h2>{data[currentSlide].title}</h2>
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
          }}
        />
      </div>

      <div className="carousel-controls">
        <button onClick={prevSlide} className="prev-btn">
          <img src={left} alt="Previous" />
        </button>
        <button onClick={nextSlide} className="next-btn">
          <img src={right} alt="Next" />
        </button>
      </div>
    </div>
  );
}
