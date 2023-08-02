import { Box } from '@mui/material'
import React from 'react'
import AuthIMG from "../../assets/authIMG.png";
import CircularProgress from '@mui/material/CircularProgress';
function Loading() {
  return (
    <Box className="loading">
       <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem"}}>
       <img src={AuthIMG}/>
       <CircularProgress color="warning"/>
       </Box>
        </Box>
  )
}

export default Loading