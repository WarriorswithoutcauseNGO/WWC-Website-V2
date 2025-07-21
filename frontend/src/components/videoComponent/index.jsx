import { useLocation, useNavigate } from "react-router-dom";
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
        <div className="overlay-text_div-wwc">WARRIORSWITHOUTCAUSE</div>
        <div className="overlay-text_div">
          We Don’t Need a Cause to Make a Change
        </div>
        <p>
          Experience the journey of our volunteers as they empower communities
          through education, health initiatives, and economic opportunities.
        </p>
        <button
          className="grow-btn"
          onClick={() => navigate("/howtohelp")}
        >
          Help Us Grow
        </button>
      </div>
      <div className="scroll_lottie">
        <iframe
          className="slottie"
          src="https://lottie.host/embed/4f2467e2-2a54-4316-8b5b-2932ced83805/kLcfldD68q.json"
        ></iframe>
        <p>scroll to learn more</p>
      </div>
    </div>
  );
}

export default VideoBackground;
