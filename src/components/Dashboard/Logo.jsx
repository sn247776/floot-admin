import React from 'react'
import { Box , Typography } from '@mui/material';

function Logo() {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Sagar
      </Typography>

    </Box>
  )
}

export default Logo