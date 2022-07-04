import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavBox = styled(Box)({
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "4px",
  padding: "8px 16px",
});

function Navbar() {
  return (
    <Box width={1} display="flex">
      <Link to="playlists">
        <NavBox>Playlists</NavBox>
      </Link>
      <Link to="podcasts">
        <NavBox>Podcasts</NavBox>
      </Link>
      <Link to="artists">
        <NavBox>Artists</NavBox>
      </Link>
      <Link to="albums">
        <NavBox>Albums</NavBox>
      </Link>
    </Box>
  );
}

export default Navbar;
