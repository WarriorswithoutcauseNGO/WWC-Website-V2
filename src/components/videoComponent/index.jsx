import React from "react";
import "./VideoBackground.css";
import bgVideo from "../../assets/bg-video.mp4";

function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="bg-video">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-text">
        <div className="overlay-text_div">
          We Don’t Need a Cause to Make a Change
        </div>
        <p>
          Experience the journey of our volunteers as they empower communities
          through education, health initiatives, and economic opportunities.
        </p>
        <button className="grow-btn">Help Us Grow</button>
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
