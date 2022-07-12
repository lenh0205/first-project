import React from "react";
import Box from "@mui/material/Box";
import { SpotifyIcon } from "~/components/Icons";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import WhiteButton from "../components/Button/WhiteButton";

function GetAppBoard({ title, subtitle, getby }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        height: "217px",
        my: 2,
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <IconButton
        sx={{
          fontSize: "3rem",
        }}
      >
        <SpotifyIcon
          sx={{
            fontSize: "5rem",
            color: "#1ed760",
          }}
        />
      </IconButton>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        sx={{ fontWeight: 700 }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle2" gutterBottom component="div" sx={{textAlign: 'center'}}>
        {subtitle}
      </Typography>
      <WhiteButton>{getby}</WhiteButton>
    </Box>
  );
}

export default GetAppBoard;
