import React, { useEffect, useState } from "react";
import styles from "./Playlist.module.scss";
import classNames from "classnames/bind";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PlayButton from "~/components/PlayButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import Divider from "@mui/material/Divider";

const cx = classNames.bind(styles);

function Playlist() {
  const [songs, setSongs] = useState([]);
  const [likedId, setLikedId] = useState([]);
  const [liked, setLiked] = useState(false); 

  useEffect(() => {
    const getSong = async () => {
      const res = await axios.get("http://localhost:3001/songs");
      setSongs(res.data);
    };
    getSong();
  }, []);

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
          <img
            src="https://lh3.googleusercontent.com/pw/AM-JKLXcKGoPwMPD_OsvbRo9XEx2i1vT54NRtOEom-nuywNYPwMJVPPc91v1eMusrS91H39h68wcAtd9r18_cd3d4iiyar6pWVrJU7eQWeeEgC898QeGR-Fxi6iVCM4S9xz0EUyqqFPloWGuGfkFudj0MILU=s625-no?authuser=0"
            alt="liked song"
            className={cx("like-img")}
          />
        </Grid>
        <Grid container item xs direction="column">
          <Grid item>
            <Typography variant="subtitle2">PLAYLIST</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              Liked Songs
            </Typography>
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
              <Grid item xs={0.4}>
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
                    sx={{ color: (song.liked ? "secondary.main" : "")}}
                    onClick={() => setLikedId((prev) => [...prev, song.id])}
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
