import React from "react";
import Box from "@mui/material/Box";
import PlayButton from "~/components/PlayButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { useDispatch } from "react-redux";
import { updateLikedPlaylists } from "~/pages/Main/playlistSlice";

function Control({ id, liked }) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{ paddingX: 4, paddingY: 3, display: "flex", alignItems: "center" }}
    >
      <PlayButton />
      <IconButton
        sx={{
          m: 2,
          color: liked ? "secondary.main" : "",
        }}
        onClick={() => dispatch(updateLikedPlaylists({ id, liked }))}
      >
        <FavoriteBorderIcon fontSize="large" />
      </IconButton>
      <MoreHorizIcon fontSize="large" />
    </Box>
  );
}

export default Control;
