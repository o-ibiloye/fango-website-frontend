import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';

import React from 'react';

const ThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#141855',
      },
      secondary: {
        main: '#2D9B83',
      },
      custom: {
        white: '#ffffff',
        black: '#000000',
        grey: '#525252',
      },
    },
    typography: {
      fontFamily: 'Helvetica',
      h1: {
        fontSize: '1.75rem',
        fontWeight: 500,
        color: '#000000',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 500,
        color: '#000000',
      },
      h3: {
        fontSize: '1.2rem',
        fontWeight: 500,
        color: '#000000',
      },
      h4: {
        fontSize: '1rem',
        fontWeight: 500,
        color: '#000000',
      },
      h5: {
        fontSize: '0.8rem',
        fontWeight: 500,
        color: '#000000',
      },
      h6: {
        fontSize: '0.6rem',
        fontWeight: 500,
        color: '#000000',
      },
    },
  });
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
