import React from 'react';
import { Box, Drawer } from '@mui/material';
import navLinks from '../navLinks/navLinks';
import FangoDrawer from './FangoDrawer';

const SideBar = ({ drawerWidth, window, handleDrawerToggle, mobileOpen }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        <FangoDrawer
          handleDrawerToggle={handleDrawerToggle}
          navLinks={navLinks}
        />
      </Drawer>
    </Box>
  );
};

export default SideBar;
