import React from 'react';
import { Box } from '@mui/material';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Body from '../components/body/Body';

const PrivacyNoticePage = () => {
  return (
    <Box>
      <Header />
      <Body children={<h1>Privacy Notice Page</h1>} />

      <Footer />
    </Box>
  );
};

export default PrivacyNoticePage;
