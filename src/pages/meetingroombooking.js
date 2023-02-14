import React from 'react';
import { Box } from '@mui/material';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Body from '../components/body/Body';

const MeetingRoomBookingPage = () => {
  return (
    <Box>
      <Header />
      <Body children={<h1>Meeting Room Booking Page</h1>} />

      <Footer />
    </Box>
  );
};

export default MeetingRoomBookingPage;
