import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Element } from 'react-scroll'
import BecomeWarrior from '../../components/BecomeWarrior'
import BrowseCollections from '../../components/BrowseCollections/BrowseCollections'
import HomePageAboutUs from '../../components/HomePageAboutUs'
import Impact from '../../components/Impact'
import OurDrives from '../../components/OurDrives'
import Actions from '../../components/actions'
import MileStone from '../../components/milestoneEvents/MileStone'
import StoryOfChange from '../../components/storyOfChange/StoryOfChange'
import VideoComponent from '../../components/videoComponent/index'

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
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
