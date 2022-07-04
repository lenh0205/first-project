import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "~/pages/Main/components/AppBar";
import Navbar from './Navbar';
import { Navigate, Outlet } from 'react-router-dom';

function Library() {
  return (
    <Box>
      <AppBar>
        <Navbar/>
      </AppBar>
      <Outlet/>
    </Box>
  )
}

export default Library