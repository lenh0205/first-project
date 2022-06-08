import React from "react";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function PlayButton() {
  return (
    <IconButton
      aria-label="play"
      sx={{
        color: "#000",
        height: 48,
        width: 48,
        justifyContent: "center",
        backgroundColor: "secondary.main",
        borderRadius: "50%",
      }}
    >
      <PlayArrowIcon fontSize="large" />
    </IconButton>
  );
}

export default PlayButton;
