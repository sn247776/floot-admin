import React, { useState } from "react";
import AuthIMG from "../../assets/authIMG.png";

import {
  Box, useTheme,
} from "@mui/material";
import {  tokens } from "../../theme";

import FooterIMG from "../../assets/light.png";



function AuthLayout({children}) {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className="auth">
      <img src={FooterIMG} alt="footerimg" />
      <Box sx={{ display: "flex", alignItems: "center", gap: "10vw" }}>
        <img src={AuthIMG} alt="auth-img" />
        <Box className="authbox" bgcolor={colors.bg[500]}>
        {children}
        </Box>
      </Box>
    </Box>
  );
}

export default AuthLayout;
