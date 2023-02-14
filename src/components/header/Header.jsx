import React, { useState } from 'react';
import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material';
import { RiMenu4Line } from '@react-icons/all-files/Ri/RiMenu4Line';
import fangoLogo from '../../assets/logo.webp';
import Logo from '../logo/Logo';
import FanGoButton from '../button/FanGoButton';
import NavBar from '../navBar/NavBar';
import navLinks from '../navLinks/navLinks';
import SideBar from '../sideBar/SideBar';

const drawerWidth = 300;

const Header = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" color="primary" elevation={0} component="nav">
        <Box
          sx={{
            flexWrap: 'wrap',
            maxWidth: 1200,
            width: '100%',
            margin: 'auto',
          }}
        >
          <Toolbar
            disableGutters={true}
            sx={{
              my: 1,
              px: { xs: 3, sm: 5, md: 2, lg: 0 },
            }}
          >
            <Logo fangoLogo={fangoLogo} />
            {/* Large Screen Configuration */}
            <Stack
              disableGutters={true}
              direction="row"
              sx={{
                width: { xs: 0, sm: 0, md: '100%', lg: '100%' },
                justifyContent: 'flex-end',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                }}
              >
                <NavBar navLinks={navLinks} />
              </Box>
              <Box
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' },
                  // minWidth: 130,
                  ml: { xs: 0, sm: 0, md: 0, lg: 5 },
                }}
              >
                <FanGoButton buttonName="Contact Us" />
              </Box>
            </Stack>

            {/* Medium & Small Screen Configuration */}
            <Stack
              direction="row"
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' },
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Box>
                <FanGoButton buttonName="Contact Us" />
              </Box>
              <Box>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <RiMenu4Line />
                </IconButton>
              </Box>
            </Stack>
          </Toolbar>
        </Box>
      </AppBar>
      <SideBar
        drawerWidth={drawerWidth}
        window={window}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
    </Box>
  );
};

export default Header;
