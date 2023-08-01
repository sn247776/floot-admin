import React from 'react'
import {Box,useTheme} from '@mui/material'
import { useContext } from "react";
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import { ColorModeContext, tokens } from "../../theme";
import { logout } from '../../redux/action/user';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <Box sx={{width:"100%",display:"flex", justifyContent:"center", alignItems:"center"}}>
         <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="warning">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <IconButton color="inherit" onClick={logoutHandler}>
            <LogoutIcon/>
          </IconButton>
    </Box>
  )
}

export default Header