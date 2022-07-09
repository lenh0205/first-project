import React from 'react';
import AppBar from "~/pages/Main/components/AppBar";
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Container from "@mui/material/Container";

function Library() {
  return (
    <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
      <AppBar>
        <Navbar/>
      </AppBar>
      <Outlet/>
    </Container>
  )
}

export default Library