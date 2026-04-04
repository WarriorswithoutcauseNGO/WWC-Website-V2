import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import bgVideo from "../../assets/bg-video.mp4";
import our_drives_1_phn from "../../assets/our_drives_1_phn.png";
import our_drives_2_phn from "../../assets/our_drives_2_phn.png";
import our_drives_3_phn from "../../assets/our_drives_3_phn.png";
import our_drives_4_phn from "../../assets/our_drives_4_phn.png";
import bf_img_1_phn from "../../assets/bf_img_1_phn.png";
import "./VideoBackground.css";

const mobileBanners = [
  { img: our_drives_1_phn, label: "Our Drives", link: "/projects" },
  { img: bf_img_1_phn, label: "Education", link: "/howtohelp" },
  { img: our_drives_2_phn, label: "Health & Hygiene", link: "/donate" },
  { img: our_drives_3_phn, label: "Environment", link: "/projects" },
  { img: bf_img_1_phn, label: "Empower Women", link: "/beherhero" },
  { img: our_drives_4_phn, label: "Volunteer", link: "/howtohelp" },
];

function VideoBackground() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const timer = setInterval(() => {
      setSlideIdx((p) => (p + 1) % mobileBanners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMobile]);

  const scrollToSection = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: "contribution-section" } });
    } else {
      scrollTo("contribution-section");
    }
  };

  const scrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBannerTap = useCallback(() => {
    const banner = mobileBanners[slideIdx];
    navigate(banner.link);
    window.scrollTo(0, 0);
  }, [slideIdx, navigate]);

  if (isMobile) {
    return (
      <div className="video-container mobile-hero">
        {mobileBanners.map((banner, i) => (
          <img
            key={i}
            src={banner.img}
            alt={banner.label}
            className={`mobile-banner-img ${slideIdx === i ? "active" : ""}`}
          />
        ))}
        <div className="mobile-hero-overlay" />
        <div className="overlay-text mobile-overlay-text">
          <div className="overlay-text_div">
            <span className="nw n1">We </span>
            <span className="nw n2">Don&#x2019;t </span>
            <span className="nw n3">Need </span>
            <span className="nw n4">a </span>
            <span className="nw n5">Cause </span>
            <span className="nw n4">to </span>
            <span className="nw n3">Make </span>
            <span className="nw n4">a </span>
            <span className="nw n6">Change</span>
          </div>
          <p className="mobile-tagline">
            Empowering communities through education, health &amp; compassion.
          </p>
          <div className="mobile-cta-row">
            <Link to="/howtohelp" className="grow-btn mobile-cta">
              Know More
            </Link>
            <span
              className="grow-btn mobile-cta mobile-cta-secondary"
              onClick={handleBannerTap}
            >
              {mobileBanners[slideIdx].label} &rarr;
            </span>
          </div>
          {/* Dot indicators */}
          <div className="mobile-dots">
            {mobileBanners.map((_, i) => (
              <span
                key={i}
                className={`mobile-dot ${slideIdx === i ? "active" : ""}`}
                onClick={() => setSlideIdx(i)}
              />
            ))}
          </div>
        </div>
        <div className="scroll_lottie" onClick={scrollToSection}>
          <svg
            className="scroll-arrow"
            width="18"
            height="26"
            viewBox="0 0 20 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0 L10 26 M2 20 L10 28 L18 20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="video-container">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="overlay-text">
        <div className="overlay-text_div">
          <span className="nw n1">We </span>
          <span className="nw n2">Don&#x2019;t </span>
          <span className="nw n3">Need </span>
          <span className="nw n4">a </span>
          <span className="nw n5">Cause </span>
          <span className="nw n4">to </span>
          <span className="nw n3">Make </span>
          <span className="nw n4">a </span>
          <span className="nw n6">Change</span>
        </div>
        <p>
          Experience the journey of our volunteers as they empower communities
          through education, health initiatives, and economic opportunities.
        </p>
        <Link to="/howtohelp" className="grow-btn">
          Become a Warrior
        </Link>
      </div>
      <div className="scroll_lottie" onClick={scrollToSection}>
        <svg
          className="scroll-arrow"
          width="20"
          height="30"
          viewBox="0 0 20 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0 L10 26 M2 20 L10 28 L18 20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>scroll to learn more</p>
      </div>
    </div>
  );
}

export default VideoBackground;
