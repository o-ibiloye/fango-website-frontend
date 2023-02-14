import React from 'react';
import { Button } from '@mui/material';

const FanGoButton = ({ buttonName }) => {
  return (
    <Button
      href="#"
      variant="contained"
      color="secondary"
      size="large"
      sx={{ textTransform: 'initial !important' }}
    >
      {buttonName}
    </Button>
  );
};

export default FanGoButton;
