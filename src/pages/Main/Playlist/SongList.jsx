import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

function SongList({ songs, handleLikedSong, handleOpenPlayBack }) {
  return (
    <Box sx={{ paddingX: 4, paddingTop: 2, paddingBottom: 4 }}>
      {/* Each song */}
      {songs.map((song, index) => (
        <Grid key={song.id} container spacing={2} alignItems="center">
          <Grid item xs={0.4} onClick={() => handleOpenPlayBack(song, index)}>
            {index + 1}
          </Grid>
          <Grid item xs={4.8} sx={{ display: "flex", alignItems: "center" }}>
            <Avatar variant="square" alt="song image" src={song.img} />
            <Stack paddingLeft={2}>
              <Typography variant="subtitle1">{song.name}</Typography>
              <Typography variant="body2">{song.singer}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">{song.album}</Typography>
          </Grid>
          <Grid item xs={2.2}>
            <Typography variant="body2">4 day ago</Typography>
          </Grid>
          <Grid
            item
            xs={1.6}
            sx={{ display: "flex", alignItems: "center", gap: 2.5 }}
          >
            <Box>
              <IconButton
                sx={{ color: song.liked ? "secondary.main" : "" }}
                onClick={() => handleLikedSong(song.id, song.liked)}
              >
                <FavoriteIcon />
              </IconButton>
            </Box>
            <Box>3:18</Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default SongList;
