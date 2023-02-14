import { Box } from '@mui/material';
import React from 'react';

const Body = ({ children }) => {
  return (
    <Box
      sx={{
        flexWrap: 'wrap',
        maxWidth: 1200,
        width: '100%',
        margin: 'auto',
        px: { xs: 3, sm: 5, md: 2, lg: 0 },
      }}
    >
      {children}
    </Box>
  );
};

export default Body;
