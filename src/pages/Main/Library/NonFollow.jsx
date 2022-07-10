import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";

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
      <ButtonBase
        sx={{
          height: 50,
          width: 170,
          borderRadius: "40px",
          backgroundColor: "#fff",
          color: "#000",
          fontSize: "1.6rem",
        }}
      >
        Find {name}s
      </ButtonBase>
    </Box>
  );
}

export default NonFollow;
