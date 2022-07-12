import React from "react";
import Box from "@mui/material/Box";
import GetAppBoard from "./GetAppBoard";

function GetApp() {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(48.366deg, rgb(80, 155, 245), rgb(175, 40, 150))",
        height: "100vh",
        px: 2,
        overflow: 'hidden'
      }}
    >
      <GetAppBoard 
        title="Spotify Mobile App"
        subtitle="Build your library · Listen to podcasts · Use less data · Try Spotify Premium"
        getby="Get The App"
      />
      <GetAppBoard
      title="Spotify on Home Screen"
      subtitle="Open Spotify in one tap · Listen in your browser · No download required · Save space on your phone"
      getby="Add Now"
      />
    </Box>
  );
}

export default GetApp;
