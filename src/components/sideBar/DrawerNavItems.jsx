import React, { useState } from 'react';
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DropDownNavItems from './DropDownNavItems';

const DrawerNavItems = ({ handleDrawerToggle, navLinks }) => {
  const [showSubLinks, setShowSubLinks] = useState('');

  const handleClick = (event, key) => {
    setShowSubLinks((prev) => {
      if (prev === key) {
        return '';
      }
      return key;
    });

    const foundLink = navLinks.find((navLink) => navLink.key === key);

    if (!foundLink.navSubLinks) {
      handleDrawerToggle();
    }
  };

  return (
    <List>
      {navLinks.map((navLink) => (
        <>
          <ListItem key={navLink.key} disablePadding>
            <ListItemButton
              href={
                !navLink.navSubLinks &&
                (navLink.key.toLowerCase() !== 'home'
                  ? '/' + navLink.key.toLowerCase()
                  : '/')
              }
              sx={{
                textAlign: 'left',
                my: 1,
                maxWidth: '100%',
                color: 'custom.grey',
                ':hover': {
                  color: 'primary.main',
                },
              }}
              onClick={(event) => {
                handleClick(event, navLink.key);
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                width="100%"
              >
                <Box
                  sx={{
                    display: 'flex',
                    direction: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Icon children={navLink.icon} />
                  </Box>
                  <Box sx={{ ml: 2 }}>
                    <Typography>{navLink.label}</Typography>
                  </Box>
                </Box>
                <Box>
                  {navLink.navSubLinks ? (
                    <ListItemIcon
                      sx={{ minWidth: 0 }}
                      children=<ArrowForwardIosIcon
                        sx={{
                          fontSize: 'small',
                          transform:
                            navLink.navSubLinks && showSubLinks === navLink.key
                              ? 'rotate(90deg)'
                              : null,
                        }}
                      />
                    />
                  ) : null}
                </Box>
              </Stack>
            </ListItemButton>
          </ListItem>
          {navLink.navSubLinks && showSubLinks === navLink.key ? (
            <DropDownNavItems
              navLink={navLink}
              handleDrawerToggle={handleDrawerToggle}
            />
          ) : null}
        </>
      ))}
    </List>
  );
};

export default DrawerNavItems;
