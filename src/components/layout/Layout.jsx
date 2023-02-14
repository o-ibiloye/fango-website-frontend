import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />
      <Box sx={{ width: '100%', maxWidth: '100%' }}>{children}</Box>
    </>
  );
};

export default Layout;
