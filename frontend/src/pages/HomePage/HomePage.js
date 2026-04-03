import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import BecomeWarrior from "../../components/BecomeWarrior";
import BecomeWarriorPopup from "../../components/BecomeWarriorPopup";
import HomePageAboutUs from "../../components/HomePageAboutUs";
import Impact from "../../components/Impact";
import Recognition from "../../components/Recognition";
import Actions from "../../components/actions";
import MileStone from "../../components/milestoneEvents/MileStone";
import VideoComponent from "../../components/videoComponent/index";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    console.log("🏠 HomePage mounted");

    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

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
      <BecomeWarriorPopup />
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />

      {/* Our Impact Section: Stats + Milestones + Recognition */}
      <Impact />
      <MileStone />
      <Recognition />

      <Element name="become-warrior-section" id="become-warrior-section">
        <BecomeWarrior />
      </Element>
    </div>
  );
};

export default HomePage;
