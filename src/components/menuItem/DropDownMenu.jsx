import React from 'react';
import { Box, Link, Menu, MenuItem, Typography } from '@mui/material';

const DropDownMenu = ({ anchorEl, open, handleClose, navLink }) => {
  return (
    <Menu
      id="positioned-menu"
      anchorEl={anchorEl}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      onClose={handleClose}
      style={{ marginTop: '21px' }}
    >
      <div onMouseLeave={handleClose}>
        {navLink.navSubLinks.map((navSubLink) => {
          return (
            <Link
              href={'/' + navSubLink.key.toLowerCase()}
              color="custom.black"
              underline="none"
            >
              <Box sx={{ padding: 1 }} key={navSubLink.key}>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    ':hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  <Typography>{navSubLink.label}</Typography>
                </MenuItem>
              </Box>
            </Link>
          );
        })}
      </div>
    </Menu>
  );
};

export default DropDownMenu;
