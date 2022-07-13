import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AppBar from "~/pages/Main/components/AppBar/index.jsx";
import { fetchAsyncSongs } from "~/pages/Main/SongSlice";
import { fetchSelectedPlaylist } from "~/pages/Main/playlistSlice";
import Banner from "./Banner";
import Control from "./Control";
import SongList from "./SongList";
import Title from "./Title";


function Playlist({ playlistInfo, songs }) {
  const dispatch = useDispatch();
  const selectedPlaylist = useSelector(
    (state) => state.playlists.selectedPlaylist
  );
  const allSongs = useSelector((state) => state.songs.songs);

  const { playlistId } = useParams();
  if (playlistId) {
    playlistInfo = selectedPlaylist;
    songs = allSongs.filter((song) => song.playlistId === playlistId);
  }

  useEffect(() => {
    dispatch(fetchAsyncSongs());
    if (playlistId) {
      dispatch(fetchSelectedPlaylist(playlistId));
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <AppBar />
      <Banner playlistInfo={playlistInfo} />

      <Stack
        sx={{
          backgroundImage:
            "linear-gradient(to bottom, #211840 0%, #121212 35%)",
        }}
      >
        <Control liked={playlistInfo.liked} id={playlistInfo.id} />

        <Title />
        <Divider />

        <SongList songs={songs} />
      </Stack>
    </React.Fragment>
  );
}

export default Playlist;
