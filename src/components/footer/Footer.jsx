import React from 'react';
import { Box, Divider, Link, Typography } from '@mui/material';
import QuickLinks from './quickLinks/QuickLinks';
import Resources from './resources/Resources';
import Contact from './contact/Contact';
import fangoLogoBlue from '../../assets/logo-blue.png';
import Logo from '../logo/Logo';
import { TiSocialFacebook } from '@react-icons/all-files/ti/TiSocialFacebook';
import { TiSocialLinkedin } from '@react-icons/all-files/ti/TiSocialLinkedin';
import { TiSocialInstagram } from '@react-icons/all-files/ti/TiSocialInstagram';

const Footer = () => {
  return (
    <Box
      sx={{
        flexWrap: 'wrap',
        maxWidth: 1200,
        width: '100%',
        margin: 'auto',
        // position: 'absolute',
        bottom: 0,
      }}
    >
      <Divider sx={{ my: 5 }} />
      <Box
        sx={{
          width: '100%',
          paddingBlock: '1.5rem',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '90%',
            margin: '0 auto',
            display: { xs: 'block', sm: 'grid', md: 'grid', lg: 'grid' },
            gridTemplateColumns: {
              sm: '1fr 1fr',
              lg: '2fr 1.3fr 1.3fr 2fr',
            },
            alignItems: 'start',
            justifyContent: 'space-between',
            gap: '3rem',
          }}
        >
          <Box sx={{ my: { xs: 5, sm: 5, md: 0, lg: 0 } }}>
            <Logo fangoLogo={fangoLogoBlue} />
            <Box sx={{ color: 'custom.grey' }}>
              <Typography sx={{ fontSize: '0.8rem', my: 3 }}>
                The FanGo team specialise in events management software
                including ticket booking, room hire, pre-orders and pre-payment
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                gap: '1.3rem',
                fontSize: '1.0rem',
                alignItems: 'center',
              }}
            >
              <Link
                href="https://www.facebook.com/FanGoCloud"
                sx={{
                  borderRadius: '50%',
                  transition: 'all .3s ease-in',
                  display: 'grid',
                  color: 'custom.grey',
                  ':hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <TiSocialFacebook />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fangocloud"
                sx={{
                  borderRadius: '50%',
                  transition: 'all .3s ease-in',
                  display: 'grid',
                  color: 'custom.grey',
                  ':hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <TiSocialLinkedin />
              </Link>
              <Link
                href="https://www.instagram.com/fango_/"
                sx={{
                  borderRadius: '50%',
                  transition: 'all .3s ease-in',
                  display: 'grid',
                  color: 'custom.grey',
                  ':hover': {
                    color: 'primary.main',
                  },
                }}
              >
                <TiSocialInstagram />
              </Link>
            </Box>
          </Box>

          <Box sx={{ my: { xs: 5, sm: 5, md: 0, lg: 0 } }}>
            <Typography
              variant="h3"
              mb={3}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                color: 'primary.main',
              }}
            >
              Quick Links
            </Typography>
            <QuickLinks />
          </Box>

          <Box sx={{ my: { xs: 5, sm: 5, md: 0, lg: 0 } }}>
            <Typography
              variant="h3"
              mb={3}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                color: 'primary.main',
              }}
            >
              Resources
            </Typography>
            <Resources />
          </Box>

          <Box sx={{ my: { xs: 5, sm: 5, md: 0, lg: 0 } }}>
            <Typography
              variant="h3"
              mb={3}
              sx={{
                fontWeight: 700,
                fontSize: '1rem',
                color: 'primary.main',
              }}
            >
              Contact
            </Typography>
            <Contact />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 5 }} />
    </Box>
  );
};

export default Footer;
