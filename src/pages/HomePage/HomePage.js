import React from 'react'
import VideoComponent from '../../components/videoComponent/index'
import HomePageAboutUs from '../../components/HomePageAboutUs'
import Actions from '../../components/actions'

const HomePage = () => {
  return (
    <div>
      <VideoComponent />
      <HomePageAboutUs />
      <Actions />
    </div>
  )
}

export default HomePage