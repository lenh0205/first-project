import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  getSelectedSong,
  openPlayBack,
  toggleIsPlaying,
  updateLikedSongs
} from "~/pages/Main/SongSlice";

function SongList({ songs }) {
  const dispatch = useDispatch();

  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const currentIndex = useSelector(
    (state) => state.songs.selectedSong.currentIndex
  );

  const handleOpenPlayBack = (song, index) => {
    // when open the new song - turn off the old song
    if (currentIndex !== index && isPlaying === true) {
      dispatch(toggleIsPlaying());
    }
    // turn on/off a song
    dispatch(getSelectedSong({ song, index }));
    dispatch(openPlayBack());
    dispatch(toggleIsPlaying());
  };

  return (
    <Box sx={{ paddingX: 4, paddingTop: 2, paddingBottom: 4 }}>
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
                onClick={() =>
                  dispatch(updateLikedSongs({ id: song.id, liked: song.liked }))
                }
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
