import { Box } from "@mui/material";
import React from "react";
import ImgText from "../../components/imgText/ImgText";
import BrowseCollections from "../../components/BrowseCollections/BrowseCollections";

const BeHerHero = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF2FA" }}>
      <ImgText heading="Be Her Hero" subHeading="Empower women artisans" />
      <BrowseCollections />
    </Box>
  );
};

export default BeHerHero;
