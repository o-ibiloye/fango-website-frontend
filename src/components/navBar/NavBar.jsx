import React from 'react';
import FanGoMenuItem from '../menuItem/FanGoMenuItem';

const NavBar = ({ navLinks }) => {
  return navLinks.map((navLink) => (
    <FanGoMenuItem key={navLink.key} navLink={navLink} />
  ));
};

export default NavBar;
