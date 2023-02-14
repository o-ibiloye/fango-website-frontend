import React from 'react';
import { Box, Divider } from '@mui/material';
import fangoLogoBlue from '../../assets/logo-blue.png';
import Logo from '../logo/Logo';
import DrawerNavItems from './DrawerNavItems';

const FangoDrawer = ({ handleDrawerToggle, navLinks }) => {
  return (
    <Box sx={{ textAlign: 'center', padding: 1 }}>
      <Logo fangoLogo={fangoLogoBlue} />
      <Divider />
      <DrawerNavItems
        handleDrawerToggle={handleDrawerToggle}
        navLinks={navLinks}
      />
    </Box>
  );
};

export default FangoDrawer;
