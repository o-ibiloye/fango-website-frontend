import React from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';

const Contact = () => {
  // NAVIGATION MENU
  const contacts = [
    {
      icon: <LocationOnIcon />,
      name: 'FanGo Ltd, Colonial House, Swinemoor Lane, Beverley, East Yorkshire, HU17 0LS',
      link: '',
    },
    {
      icon: <MailIcon />,
      name: 'contact@fangocloud.co.uk',
      link: 'mailto:contact@fangocloud.co.uk',
    },
  ];

  return (
    <Box>
      {contacts.map((el, i) => (
        <div key={i + 1}>
          <Link
            href={el.link}
            underline="none"
            sx={{
              color: 'custom.grey',
              ':hover': {
                color: 'primary.main',
              },
            }}
          >
            <Stack direction="row" spacing={2}>
              <Box sx={{ mb: 2 }}>{el.icon}</Box>
              <Box>
                <Typography sx={{ fontSize: '0.8rem' }}>{el.name}</Typography>
              </Box>
            </Stack>
          </Link>
        </div>
      ))}
    </Box>
  );
};

export default Contact;
