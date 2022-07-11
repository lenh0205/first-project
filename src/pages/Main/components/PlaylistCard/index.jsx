import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PlayButton from "~/pages/Main/components/Button/PlayButton";

import React from "react";

function PlaylistCard({ playlist }) {
  return (
    <Card
      sx={{
        height: 267,
        display: "flex",
        flexDirection: "column",
        p: 2,
        position: "relative",
        backgroundColor: "background.card",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 158,
          mb: 2,
        }}
        image={playlist.img}
        alt="random"
        onError={() => console.log('hello')}
      />
      <CardContent sx={{ p: 0 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="h5"
          component="h2"
        >
          {playlist.name}
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="subtitle2"
          component="h3"
        >
          {playlist.sub}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          top: 118,
          right: 24,
        }}
      >
        <PlayButton />
      </CardActions>
    </Card>
  );
}

export default PlaylistCard;
