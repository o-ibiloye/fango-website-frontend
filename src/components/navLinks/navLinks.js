import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import StartIcon from '@mui/icons-material/Start';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import SickIcon from '@mui/icons-material/Sick';
import PaymentIcon from '@mui/icons-material/Payment';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PeopleIcon from '@mui/icons-material/People';

const navLinks = [
  { label: 'Home', key: 'home', icon: <HomeIcon /> },
  { label: 'Getting Started', key: 'gettingStarted', icon: <StartIcon /> },
  {
    label: 'Event Management',
    key: 'eventManagement',
    icon: <EventAvailableIcon />,
    navSubLinks: [
      {
        label: 'Developing The System',
        key: 'developingTheSystem',
        icon: <SettingsSuggestIcon />,
      },
      {
        label: 'Pre-Ordering',
        key: 'preOrdering',
        icon: <AddShoppingCartIcon />,
      },
      {
        label: 'Meeting Room Booking',
        key: 'meetingRoomBooking',
        icon: <MeetingRoomIcon />,
      },
      {
        label: 'Allergens & Dietaries',
        key: 'allergensDietaries',
        icon: <SickIcon />,
      },
      { label: 'Pricing', key: 'pricing', icon: <PaymentIcon /> },
      { label: 'FAQs', key: 'faqs', icon: <QuizIcon /> },
    ],
  },
  { label: 'Clients', key: 'clients', icon: <PeopleAltIcon /> },
  {
    label: 'About',
    key: 'about',
    icon: <InfoIcon />,
    navSubLinks: [
      { label: 'About Us', key: 'aboutUs', icon: <ContactSupportIcon /> },
      {
        label: 'In The Community',
        key: 'inTheCommunity',
        icon: <PeopleIcon />,
      },
    ],
  },
];

export default navLinks;
