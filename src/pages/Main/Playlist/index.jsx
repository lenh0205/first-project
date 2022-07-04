import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import classNames from "classnames/bind";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import {
  fetchAsyncSongs,
  getSelectedSong,
  openPlayBack,
  toggleIsPlaying,
  updateLikedSongs,
} from "~/pages/Main/SongSlice";
import Banner from "./Banner";
import Control from "./Control";
import styles from "./Playlist.module.scss";
import SongList from "./SongList";
import Title from "./Title";

const cx = classNames.bind(styles);

function Playlist() {
  const dispatch = useDispatch();
  const allSongs = useSelector((state) => state.songs.songs);

  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const currentIndex = useSelector(
    (state) => state.songs.selectedSong.currentIndex
  );

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
      dispatch(toggleIsPlaying());
    }
    // turn on/off a song
    dispatch(getSelectedSong({ song, index }));
    dispatch(openPlayBack());
    dispatch(toggleIsPlaying());
  };

  return (
    <React.Fragment>
      <Banner playlist={playlist} />

      <Stack className={cx("content")}>
        <Control />

        <Title />
        <Divider />

        {/* All songs */}
        <SongList
          songs={songs}
          handleLikedSong={handleLikedSong}
          handleOpenPlayBack={handleOpenPlayBack}
        />
      </Stack>
    </React.Fragment>
  );
}

export default Playlist;
