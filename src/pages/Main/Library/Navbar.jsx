import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const NavBox = styled(Box)({
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "4px",
  minWidth: "100px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".active &": {
    backgroundColor: "#333333",
  },
});

function Navbar() {
  return (
    <Box width={1} display="flex">
      <NavLink to="playlists">
        <NavBox>Playlists</NavBox>
      </NavLink>
      <NavLink to="podcasts">
        <NavBox>Podcasts</NavBox>
      </NavLink>
      <NavLink to="artists">
        <NavBox>Artists</NavBox>
      </NavLink>
      <NavLink to="albums">
        <NavBox>Albums</NavBox>
      </NavLink>
    </Box>
  );
}

export default Navbar;
