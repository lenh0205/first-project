import React from "react";
import Box from "@mui/material/Box";
import PlayButton from "~/components/PlayButton";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Control() {
  return (
    <Box sx={{ paddingX: 4, paddingY: 3, display: "flex", alignItems: "center" }}>
      <PlayButton />
      <FavoriteBorderIcon fontSize="large" sx={{ m: 2 }}/>
      <MoreHorizIcon fontSize="large"/>
    </Box>
  );
}

export default Control;
