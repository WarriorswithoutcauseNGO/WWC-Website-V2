import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ImgText from "../../components/imgText/ImgText";
import Cards from "../../components/aboutUsCards/Cards";
import AboutUsCardOne from "../../assets/AboutUsCard1.png";
import AboutUsCardTwo from "../../assets/AboutUsCard2.png";
import MeetTheTeam from "../../components/meettheteam/MeetTheTeam";

const AboutUs = () => {
  return (
    <Box sx={{backgroundColor:'#FFF2FA'}}>
      <ImgText heading="About Us" subHeading="Who are we" />
      <Cards
        title="Our Vision"
        description="We envision a world where every community, no matter how marginalised, has the power and resources to overcome challenges and build a brighter future. Our dream is one where dignity, opportunity, and equality are ideals and lived experiences for all."
        imageSrc={AboutUsCardOne}
        imageAlt="Our Vision"
      />
      <Cards
        title="Our Mission"
        description="At WWC, our mission is simple yet profound: to stand with those who need it most, offering education, healthcare, and empowerment. We believe in creating lasting change driven by the hands and hearts of the people we serve. Through collaboration, advocacy, and unwavering dedication, we strive to dismantle the barriers of poverty and inequality. "
        imageSrc={AboutUsCardTwo}
        imageAlt="Our Mission"
        reverse= 'true'
      />
      <MeetTheTeam/>
    </Box>
  );
};

export default AboutUs;
