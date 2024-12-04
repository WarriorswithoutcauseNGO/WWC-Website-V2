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
      <DonationPageBox
        sx={{
          alignSelf: 'flex-start',
          maxHeight: 'fit-content',
        }}
      />
    </Box>
  );
}
