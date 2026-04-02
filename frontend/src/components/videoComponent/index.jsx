import { useLocation, useNavigate, Link } from "react-router-dom";
import bgVideo from "../../assets/bg-video.mp4";
import "./VideoBackground.css";

function VideoBackground() {
  const navigate = useNavigate();
  const location = useLocation();

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
