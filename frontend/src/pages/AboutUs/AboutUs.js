import { Box } from "@mui/material";
import React from "react";

import Cards from "../../components/aboutUsCards/Cards";
import AboutUsSplit from "../../components/AboutUsSplit/AboutUsSplit";
import AboutWwcContent from "../../components/AboutWwcContent/AboutWwcContent";
import CredibilityStrip from "../../components/CredibilityStrip/CredibilityStrip";
import AboutUsCardOne from "../../assets/AboutUsCard1.png";
import AboutUsCardTwo from "../../assets/AboutUsCard2.png";
import our_drives_1 from "../../assets/our_drives_1.png";
import our_drives_2 from "../../assets/our_drives_2.png";
import our_drives_3 from "../../assets/our_drives_3.png";
import our_drives_4 from "../../assets/our_drives_4.png";
import bf_img_1 from "../../assets/bf_img_1.png";
import bf_img_2 from "../../assets/bf_img_2.png";
import bf_img_3 from "../../assets/bf_img_3.png";
import MeetTheTeam from "../../components/meettheteam/MeetTheTeam";
import StoryOfChange from "../../components/storyOfChange/StoryOfChange";
import ImpactAchievements from "../../components/ImpactAchievements/ImpactAchievements";

const visionImages = [AboutUsCardOne, our_drives_1, our_drives_3, bf_img_1];
const missionImages = [AboutUsCardTwo, our_drives_2, our_drives_4, bf_img_2, bf_img_3];

const visionText = `Our society will be one where empathy rather than duty drives us to act, where compassion comes naturally to us all, and where every voice will be valued. Knowledge, connection, and the guts to care will be the beginning steps toward meaningful change — that is what Warriors Without Cause stands for.

We are a team of young, passionate, and committed people whose primary objective is to transform the way social impact is practiced in our day-to-day life. We are imagining a world where all people are interconnected, diversity is important, and the well-being of people comes first.

Our aim goes beyond quick fixes or tokenistic involvement. We hope to build a society where awareness translates into accountability, empathy translates into action, and the realization of responsibility starts with ourselves in our communities.

Our ultimate goal is to leave a profoundly human imprint — growing emotional strength, confidence, and mindsets. We envision a future with no room for apathy, where social responsibility is lived daily and impact is measured not by accolades but by the value of caring.`;

const missionText = `We aim at promoting awareness, accountability, and collaboration — enabling people, especially the youth, to actively engage in constructive change. By creating platforms that go beyond participation, Warriors Without Cause bridges the gap between intentions and action.

Our core belief is that anyone — regardless of identity, privilege, or resources — can contribute. Through our projects, we assist others to take the first step while raising awareness on social, emotional, and community-related issues, always remembering that value lies not in a few individuals but in everybody.

We run peer support programs, youth empowerment initiatives, community involvement drives, and creative teamwork. We create need-based programs that encourage open communication and strengthen collective problem-solving capabilities.

The confidence generated among individuals, the communities we work with, and the networks we help build illustrate our mission's impact. From awareness campaigns and volunteering to leadership training and support networks, our work aims at permanent transformation through compassion and mutual cooperation.`;

const AboutUs = () => {
  return (
    <Box sx={{ backgroundColor: '#FFF2FA' }}>
      <AboutUsSplit />
      <AboutWwcContent />
      <Cards
        title="Our Vision"
        description={visionText}
        images={visionImages}
        imageAlt="Our Vision"
      />
      <Cards
        title="Our Mission"
        description={missionText}
        images={missionImages}
        imageAlt="Our Mission"
        reverse='true'
      />
      <CredibilityStrip />
      <ImpactAchievements />
      <MeetTheTeam />
      <StoryOfChange />
    </Box>
  );
};

export default AboutUs;
