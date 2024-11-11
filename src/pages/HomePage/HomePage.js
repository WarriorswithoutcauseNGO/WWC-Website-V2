import React from 'react'
import VideoComponent from '../../components/videoComponent/index'
import HomePageAboutUs from '../../components/HomePageAboutUs'
import Actions from '../../components/actions'
import Impact from '../../components/Impact'
import OurDrives from '../../components/OurDrives'

const HomePage = () => {
  return (
    <div>
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />
      <Impact />
      <OurDrives />
    </div>
  )
}

export default HomePage