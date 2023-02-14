import React from 'react';
import { Link } from '@mui/material';

const Logo = ({ fangoLogo }) => {
  return (
    <Link href="/">
      <img src={fangoLogo} alt="FanGo" width={80} />
    </Link>
  );
};

export default Logo;
