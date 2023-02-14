import React from 'react';
import {
  Box,
  Icon,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Typography,
} from '@mui/material';

const DropDownNavItems = ({ navLink, handleDrawerToggle }) => {
  return (
    <List sx={{ ml: 2 }}>
      {navLink.navSubLinks.map((navSubLink) => (
        <ListItem key={navSubLink.key} disablePadding>
          <ListItemButton
            href={'/' + navSubLink.key.toLowerCase()}
            sx={{
              textAlign: 'left',
              my: 0.5,
              maxWidth: '100%',
              color: 'custom.grey',
              ':hover': {
                color: 'primary.main',
              },
            }}
            onClick={handleDrawerToggle}
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
                  <Icon children={navSubLink.icon} />
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography>{navSubLink.label}</Typography>
                </Box>
              </Box>
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DropDownNavItems;
