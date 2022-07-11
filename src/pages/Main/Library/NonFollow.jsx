import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import WhiteButton from "~/pages/Main/components/Button/WhiteButton.jsx";

function NonFollow({ icon, name }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transform: "translateY(-20%)",
      }}
    >
      <Box>{icon}</Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Follow your first {name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Follow {name}s you like by tapping the follow button.
      </Typography>
      <WhiteButton>Find {name}s</WhiteButton>
    </Box>
  );
}

export default NonFollow;
