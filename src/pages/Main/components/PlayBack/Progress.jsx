import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOldRandomSongs, nextRamdomSong, nextSong } from "~/pages/Main/SongSlice";

const Progress = ({ isPlaying, url, currentIndex, playlistId, volume }) => {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef();

  const dispatch = useDispatch();
  const { isRandom, isRepeat } = useSelector((state) => state.songs);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume])

  const handleProgress = () => {
    const totalTime = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    if (totalTime) {
      setProgress(Math.floor((currentTime / totalTime) * 100));
    }
  };

  const handleSeek = (e) => {
    const seekTime = (audioRef.current.duration * e.target.value) / 100;
    audioRef.current.currentTime = seekTime;
  };

  const handleSongEnded = () => {
    if (isRepeat) {
      audioRef.current.play();
    } else if (isRandom) {
        dispatch(getOldRandomSongs(currentIndex))
        dispatch(nextRamdomSong(playlistId))
    } else {
      dispatch(nextSong(currentIndex));
    }
  };

  return (
    <Box>
      <Slider
        size="small"
        step={1}
        min={0}
        max={100}
        value={progress}
        onChange={handleSeek}
      />
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleProgress}
        onEnded={handleSongEnded}
      />
    </Box>
  );
};

export default Progress;
