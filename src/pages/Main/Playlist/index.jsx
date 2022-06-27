import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import PlayButton from "~/components/PlayButton";
import {
  fetchAsyncSongs,
  getSelectedSong,
  openPlayBack,
  toggleIsPlaying,
  updateLikedSongs
} from "~/pages/Main/SongSlice";
import styles from "./Playlist.module.scss";

const cx = classNames.bind(styles);

function Playlist() {
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => state.songs.songs);
  
  const isPlaying = useSelector(state => state.songs.isPlaying)
  const currentIndex = useSelector(state => state.songs.selectedSong.currentIndex)

  const location = useLocation();
  const playlist = location.state;

  const { playlistId } = useParams();

  // what kind of this playlist ? liked playlist ? specific playlist ?
  let songs = [];
  if (playlistId === "likedsong") {
    songs = allSongs.filter((song) => song.liked === true);
  } else {
    songs = allSongs.filter((song) => song.playlistId === playlist.id);
  }

  useEffect(() => {
    dispatch(fetchAsyncSongs());
  }, [dispatch]);

  const handleLikedSong = (id, liked) => {
    dispatch(updateLikedSongs({ id, liked }));
  };

  const handleOpenPlayBack = (song, index) => {
    // when open the new song - turn off the old song
    if (currentIndex !== index && isPlaying === true) {
      dispatch(toggleIsPlaying())
    }
    // turn on/off a song
    dispatch(getSelectedSong({ song, index }));
    dispatch(openPlayBack())
    dispatch(toggleIsPlaying());
  };

  return (
    <React.Fragment>
      {/* title section */}
      <Grid
        container
        spacing={3}
        height="58vh"
        alignItems="flex-end"
        sx={{ paddingX: 4, paddingBottom: 3 }}
        className={cx("title")}
      >
        <Grid item xs={3} alignItems="flex-end">
          <img src={playlist.img} alt="liked song" className={cx("like-img")} />
        </Grid>
        <Grid container item xs direction="column">
          <Grid item>
            <Typography variant="subtitle2">PLAYLIST</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              {playlist.name}
            </Typography>
            <Typography variant="subtitle1">{playlist.sub}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" component="span">
              User{" "}
            </Typography>
            <Typography variant="body2" component="span">
              songs
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* content section */}
      <Stack className={cx("content")}>
        <Box sx={{ paddingX: 4, paddingY: 3 }}>
          <PlayButton />
        </Box>

        {/* sticky UI tabs */}
        <Grid
          container
          direction="row"
          spacing={2}
          paddingX={6}
          alignItems="center"
        >
          <Grid item xs={0.4}>
            <Typography variant="overline" display="block">
              #
            </Typography>
          </Grid>
          <Grid item xs={4.8}>
            <Typography variant="overline" display="block">
              title
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="overline" display="block">
              album
            </Typography>
          </Grid>
          <Grid item xs={2.2}>
            <Typography variant="overline" display="block">
              date added
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccessTimeIcon fontSize="1.6rem" />
          </Grid>
        </Grid>
        <Divider />

        {/* All songs */}
        <Box sx={{ paddingX: 4, paddingTop: 2, paddingBottom: 4 }}>
          {/* Each song */}
          {songs.map((song, index) => (
            <Grid key={song.id} container spacing={2} alignItems="center">
              <Grid
                item
                xs={0.4}
                onClick={() => handleOpenPlayBack(song, index)}
              >
                {index + 1}
              </Grid>
              <Grid
                item
                xs={4.8}
                sx={{ display: "flex", alignItems: "center" }}
              >
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
      </Stack>
    </React.Fragment>
  );
}

export default Playlist;
