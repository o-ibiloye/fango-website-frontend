import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const QuickLinks = () => {
  // NAVIGATION MENU
  const quickLinks = [
    {
      name: 'Home',
      link: '',
    },
    {
      name: 'Getting Started',
      link: 'gettingstarted',
    },
    {
      name: 'Event Management',
      link: 'developingthesystem',
    },
    {
      name: 'Clients',
      link: 'clients',
    },
    {
      name: 'About',
      link: 'aboutus',
    },
  ];
  return (
    <Box>
      {quickLinks.map((el, i) => (
        <Box key={i + 1} sx={{ mb: 2 }}>
          <Link
            href={'/' + el.link}
            underline="none"
            sx={{
              color: 'custom.grey',
              ':hover': {
                color: 'primary.main',
              },
            }}
          >
            <Typography sx={{ fontSize: '0.8rem' }}>{el.name}</Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default QuickLinks;
