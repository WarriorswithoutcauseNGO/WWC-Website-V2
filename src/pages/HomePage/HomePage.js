import React from 'react'
import VideoComponent from '../../components/videoComponent/index'
import HomePageAboutUs from '../../components/HomePageAboutUs'
import Actions from '../../components/actions'
import Impact from '../../components/Impact'
import OurDrives from '../../components/OurDrives'
import Contribution from '../../components/contributionsHomepage/Contribution'
import MileStone from '../../components/milestoneEvents/MileStone'
import StoryOfChange from '../../components/storyOfChange/StoryOfChange'

const HomePage = () => {
  return (
    <div>
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />
      <Impact />
      <OurDrives />
      <MileStone />
      <StoryOfChange />
      <Contribution />
    </div>
  )
}

export default HomePage