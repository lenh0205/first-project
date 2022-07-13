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
  updateLikedSongs,
} from "~/pages/Main/SongSlice";
import styles from "./Playlist.module.scss";
import classNames from "classnames/bind";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const cx = classNames.bind(styles);

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
        <Grid
          key={song.id}
          container
          alignItems="center"
          className={cx("song-card")}
          sx={{
            height: 57,
            borderRadius: "4px",
          }}
        >
          <Grid
            item
            md={0.6}
            onClick={() => handleOpenPlayBack(song, index)}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                cursor: "pointer",
              }}
              className={cx("song-index")}
            >
              {isPlaying && index === currentIndex ? (
                <img
                  alt="song"
                  src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif"
                  style={{ width: "14px" }}
                ></img>
              ) : (
                index + 1
              )}
            </Typography>
            <Typography>
              {isPlaying && index === currentIndex ? (
                <PauseIcon className={cx("song-control")} />
              ) : (
                <PlayArrowIcon className={cx("song-control")} />
              )}
            </Typography>
          </Grid>
          <Grid
            item
            xs={8.2}
            md={4.6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Avatar
              variant="square"
              alt="song image"
              src={song.img}
              sx={{
                ml: {
                  xs: 2,
                  md: 0,
                },
              }}
            />
            <Stack paddingLeft={2}>
              <Typography
                variant="subtitle1"
                sx={{
                  color:
                    isPlaying && index === currentIndex ? "#1ed760" : "unset",
                }}
              >
                {song.name}
              </Typography>
              <Typography variant="body2">{song.singer}</Typography>
            </Stack>
          </Grid>
          <Grid
            item
            md={3}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            <Typography variant="body2">{song.album}</Typography>
          </Grid>
          <Grid
            item
            xs={2.2}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
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
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              3:18
            </Box>
          </Grid>
          <Grid
            item
            xs={2.2}
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: 'flex-end'
            }}
          >
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default SongList;
