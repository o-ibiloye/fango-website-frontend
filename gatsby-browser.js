import React from 'react';
import Layout from './src/components/layout/Layout';
import ThemeProvider from './src/providers/ThemeProvider';

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};
