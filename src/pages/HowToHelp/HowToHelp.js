import { Box } from '@mui/material'
import React from 'react'
import ImgText from '../../components/imgText/ImgText'
import VolunteerCard from '../../components/volunteerCard/VolunteerCard'
import HTHcard from '../../components/howTohelpCardTwo/HTHC'

const HowToHelp = () => {
  return (
    <Box>
      <ImgText heading="How to help" subHeading="Uplift lives" />
      <VolunteerCard />
      <HTHcard />
    </Box>
  )
}

export default HowToHelp