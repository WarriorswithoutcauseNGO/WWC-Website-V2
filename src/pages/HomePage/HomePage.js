import React from 'react'
import VideoComponent from '../../components/videoComponent/index'
import HomePageAboutUs from '../../components/HomePageAboutUs'
import Actions from '../../components/actions'
import Impact from '../../components/Impact'
import OurDrives from '../../components/OurDrives'
import Contribution from '../../components/contributionsHomepage/Contribution'
import MileStone from '../../components/milestoneEvents/MileStone'
import StoryOfChange from '../../components/storyOfChange/StoryOfChange'
import BecomeWarrior from '../../components/BecomeWarrior'
import BrowseCollections from '../../components/BrowseCollections/BrowseCollections'
import { Element } from 'react-scroll';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);

      if (element) {
        // Delay the scrolling to ensure the DOM is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);


  return (
    <div>
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />
      <Impact />
      <Element name="our-drives-section" id="our-drives-section">
        <OurDrives />
      </Element>
      <BrowseCollections />
      <BecomeWarrior />
      <MileStone />
      <StoryOfChange />
      <Element name="contribution-section" id="contribution-section">
        <Contribution />
      </Element>

    </div>
  );
};

export default HomePage;
