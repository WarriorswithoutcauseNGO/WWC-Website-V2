import React from "react";
import donation_img from '../../assets/donation_img.png';
import donation_img_phn from '../../assets/donation_img_phn.png';
import { Box, useMediaQuery } from '@mui/material';
import DonationPageBox from '../../components/DonationPageBox';

export default function Donation() {
  const isPhoneView = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        pt: { md: 8, xs: 0 },
        display: 'flex',
        pb: 2,
        alignItems: 'flex-start',
        flexDirection: { md: 'row', xs: 'column' }
      }}
    >
      <img
        src={isPhoneView ? donation_img_phn : donation_img}
        alt="Donation"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Box sx={{
        display: { md: 'none', xs: 'block' }
      }}> <div className="scroll_lottie">
          <iframe
            className="slottie"
            src="https://lottie.host/embed/4f2467e2-2a54-4316-8b5b-2932ced83805/kLcfldD68q.json"
          ></iframe>
          <p>scroll to learn more</p>
        </div></Box>

      <DonationPageBox
        sx={{
          alignSelf: 'flex-start',
          maxHeight: 'fit-content',
        }}
      />
    </Box>
  );
}
