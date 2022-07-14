import DevicesIcon from "@mui/icons-material/Devices";
import LyricsIcon from "@mui/icons-material/Lyrics";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  nextSong,
  prevSong,
  toggleIsPlaying,
  toggleIsRamdom,
  toggleIsRepeat,
} from "~/pages/Main/SongSlice";
import Progress from "./Progress";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import RepeatOneIcon from "@mui/icons-material/RepeatOne";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";
import { useState } from "react";

const ControlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    padding: 8,
    fontSize: "1.6rem",
  },
}));

function PlayBack() {
  const [volume, setVolume] = useState(50);

  const dispatch = useDispatch();
  const { song, currentIndex } = useSelector(
    (state) => state.songs.selectedSong
  );
  const { isPlaying, isRepeat, isRandom } = useSelector((state) => state.songs);

  const handleRadomSong = () => {
    dispatch(toggleIsRamdom());
  };

  return (
    <Grid container height={90} paddingX={2} sx={{
      backgroundColor: theme => theme.palette.background.card
    }}>
      <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <CardMedia
            component="img"
            image={song.img}
            alt="Live from space album cover"
            sx={{
              pr: 2
            }}
          />
        </Box>
        <Box>
          <Typography>{song.name}</Typography>
          <Typography>{song.singer}</Typography>
        </Box>
      </Grid>

      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box display="flex" justifyContent="space-evenly">
          <IconButton color="secondary" onClick={handleRadomSong}>
            {isRandom ? <ShuffleOnIcon /> : <ShuffleIcon />}
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => dispatch(prevSong(currentIndex))}
          >
            <SkipPreviousIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => dispatch(toggleIsPlaying())}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => dispatch(nextSong(currentIndex))}
          >
            <SkipNextIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => dispatch(toggleIsRepeat())}
          >
            {isRepeat ? <RepeatOneIcon /> : <RepeatIcon />}
          </IconButton>
        </Box>

        <Progress
          isPlaying={isPlaying}
          url={song.songUrl}
          currentIndex={currentIndex}
          playlistId={song.playlistId}
          volume={volume}
        />
      </Grid>

      <Grid item xs={4} display="flex" alignItems="center" paddingLeft={10}>
        <ControlTooltip title="Lyrics">
          <IconButton color="secondary">
            <LyricsIcon />
          </IconButton>
        </ControlTooltip>
        <ControlTooltip title="Queue">
          <IconButton color="secondary">
            <QueueMusicIcon />
          </IconButton>
        </ControlTooltip>
        <ControlTooltip title="Connect to a device">
          <IconButton color="secondary">
            <DevicesIcon />
          </IconButton>
        </ControlTooltip>
        <Stack direction="row" flex="1" alignItems="center">
          <ControlTooltip title="Mute">
            <VolumeDownIcon color="secondary" />
          </ControlTooltip>
          <Slider
            size="small"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default PlayBack;
