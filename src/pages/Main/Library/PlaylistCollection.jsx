import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PlaylistCard from "~/pages/Main/components/PlaylistCard";
import ContextMenu from "~/pages/Main/components/MenuContext/index.jsx";

function PlaylistCollection() {
  const allPlaylists = useSelector((state) => state.playlists.playlists);
  const playlistCollection = allPlaylists
    .filter(
      (playlist) => playlist.liked === true || playlist.type === "created"
    )
    .reverse();

  const likedSongPlaylistInfo = useSelector(
    (state) => state.playlists.likedSongPlaylistInfo
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Link to="/collection/tracks">
          <ContextMenu>
            <PlaylistCard playlist={likedSongPlaylistInfo} />
          </ContextMenu>
        </Link>
      </Grid>
      {playlistCollection && playlistCollection.map((playlist) => (
        <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
          <Link to={`/playlist/${playlist.id}`}>
            <ContextMenu>
              <PlaylistCard playlist={playlist} />
            </ContextMenu>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default PlaylistCollection;
