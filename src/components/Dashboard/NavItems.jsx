import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GamesIcon from '@mui/icons-material/Games';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Box } from '@mui/material';



const menuItems = [
  { icon: <DashboardIcon />, text: 'Dashboard', link: '/' },
  { icon: <GamesIcon />, text: 'Games', link: '/games' },
  { icon: <AssignmentIcon />, text: 'Request', link: '/request' },
  // { icon: <PeopleIcon />, text: 'Users', link: '/users' },
  // { icon: <BarChartIcon />, text: 'Publishers ', link: '/publishers ' },
  // { icon: <LayersIcon />, text: 'Comments', link: '/comments' },
];

const savedReports = [
  { icon: <AssignmentIcon />, text: 'Current month', link: '/current-month' },
  { icon: <AssignmentIcon />, text: 'Last quarter', link: '/last-quarter' },
  { icon: <AssignmentIcon />, text: 'Year-end sale', link: '/year-end-sale' },
];

function NavItems() {

  const activeStyle = {
    backgroundColor: 'inherit',

    '&.active': {
      backgroundColor: 'var(--primary)',
      color: 'white',
      '& .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  };

  return (
    <Box>
      <Divider />
      <List component="nav">
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            component={NavLink}
            to={item.link}
            sx={activeStyle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
        <Divider sx={{ my: 1 }} />
        {/* <ListSubheader inset>Saved reports</ListSubheader> */}
        {/* {savedReports.map((item, index) => (
          <ListItemButton
            key={index}
            component={NavLink}
            to={item.link}
            sx={activeStyle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))} */}
      </List>
    </Box>
  );
}

export default NavItems;
