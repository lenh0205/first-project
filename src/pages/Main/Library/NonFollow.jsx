import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';

function NonFollow({ icon, name }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>{icon}</Box>
      <Typography>Follow your first {name}</Typography>
      <Typography>
        Follow {name}s you like by tapping the follow button.
      </Typography>
      <ButtonBase>Find {name}s</ButtonBase>
    </Box>
  );
}

export default NonFollow;
