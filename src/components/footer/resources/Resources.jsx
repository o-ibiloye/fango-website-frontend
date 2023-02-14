import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Resources = () => {
  // NAVIGATION MENU
  const resources = [
    {
      name: 'FAQs',
      link: 'faqs',
    },
    {
      name: 'Privacy Notice',
      link: 'privacynotice',
    },
    {
      name: 'Customer T&Cs',
      link: 'customertcs',
    },
    {
      name: 'Cookies Policy',
      link: 'cookiespolicy',
    },
  ];

  return (
    <Box>
      {resources.map((el, i) => (
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

export default Resources;
