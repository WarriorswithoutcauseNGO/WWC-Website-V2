import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import BecomeWarrior from "../../components/BecomeWarrior";
import BrowseCollections from "../../components/BrowseCollections/BrowseCollections";
import HomePageAboutUs from "../../components/HomePageAboutUs";
import Impact from "../../components/Impact";
import OurDrives from "../../components/OurDrives";
import Actions from "../../components/actions";
import MileStone from "../../components/milestoneEvents/MileStone";
import StoryOfChange from "../../components/storyOfChange/StoryOfChange";
import VideoComponent from "../../components/videoComponent/index";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("🏠 HomePage mounted");

    // Reset scroll position
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Fix: restore overflow that might have been set to hidden
    const timeout = setTimeout(() => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      setTimeout(() => {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      }, 50);
    }, 0);

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div style={{ marginBottom: "48px" }}>
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />
      <Impact />
      <Element name="our-drives-section" id="our-drives-section">
        <OurDrives />
      </Element>
      <BrowseCollections />
      {/* Unified section starts here */}
      <div style={{ background: "#232323" }}>
        <BecomeWarrior />
        <MileStone />
      </div>
      {/* Unified section ends here */}
      <StoryOfChange />
    </div>
  );
};

export default HomePage;
