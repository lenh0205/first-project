import React from "react";
import AppBar from "~/pages/Main/components/AppBar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Library() {
  const theme = useTheme();
  const iPadMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
      {iPadMatch || (
        <AppBar>
          <Navbar />
        </AppBar>
      )}

      <Outlet />
    </Container>
  );
}

export default Library;
