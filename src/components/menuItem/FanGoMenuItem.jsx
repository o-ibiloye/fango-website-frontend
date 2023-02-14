import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import TopLevelMenu from './TopLevelMenu';

const FanGoMenuItem = ({ navLink }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (event) => {
    if (event.currentTarget.localName !== 'ul' && navLink.navSubLinks) {
      const doc = document.getElementById('positioned-menu');
      if (doc) {
        const menu = doc.children[2];

        const menuBoundary = {
          left: menu.offsetLeft,
          top: event.currentTarget.offsetTop + event.currentTarget.offsetHeight,
          right: menu.offsetLeft + menu.offsetHeight,
          bottom: menu.offsetTop + menu.offsetHeight,
        };

        if (
          event.clientX >= menuBoundary.left &&
          event.clientX <= menuBoundary.right &&
          event.clientY <= menuBoundary.bottom &&
          event.clientY >= menuBoundary.top
        ) {
          return;
        }
      }
    }

    setOpen(false);
  };

  return (
    <div>
      <TopLevelMenu
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        navLink={navLink}
      />

      {navLink.navSubLinks ? (
        <DropDownMenu
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          navLink={navLink}
        />
      ) : null}
    </div>
  );
};

export default FanGoMenuItem;
