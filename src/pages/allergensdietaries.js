import { Box } from '@mui/material';
import React from 'react';
import Body from '../components/body/Body';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const AllergensDietariesPage = () => {
  return (
    <Box>
      <Header />
      <Body children={<h1>Allergens Dietaries Page</h1>} />

      <Footer />
    </Box>
  );
};

export default AllergensDietariesPage;
