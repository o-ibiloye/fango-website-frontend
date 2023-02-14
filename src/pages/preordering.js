import React from 'react';
import { Box } from '@mui/material';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Body from '../components/body/Body';

const PreOrderingPage = () => {
  return (
    <Box>
      <Header />
      <Body children={<h1>Pre-Ordering Page</h1>} />

      <Footer />
    </Box>
  );
};

export default PreOrderingPage;
