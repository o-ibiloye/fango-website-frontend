import React from 'react';
import { Box, Link, MenuItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const TopLevelMenu = ({ open, handleOpen, handleClose, navLink }) => {
  return (
    <Link
      href={
        !navLink.navSubLinks &&
        (navLink.key.toLowerCase() !== 'home'
          ? '/' + navLink.key.toLowerCase()
          : '/')
      }
      color="custom.white"
      sx={{
        ':hover': {
          color: 'secondary.main',
        },
      }}
      underline="none"
    >
      <Box sx={{ padding: 1 }}>
        <MenuItem
          id="positioned-menu-item"
          aria-owns={open ? 'positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          style={{
            zIndex: 1301,
          }}
        >
          <Typography align="center">{navLink.label}</Typography>
          {navLink.navSubLinks ? <KeyboardArrowDownIcon /> : null}
        </MenuItem>
      </Box>
    </Link>
  );
};

export default TopLevelMenu;
