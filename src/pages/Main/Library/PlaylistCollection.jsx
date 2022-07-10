import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContextMenu from "~/pages/Main/components/ContextMenu/index.jsx";
import PlaylistCard from "~/pages/Main/components/PlaylistCard";
import { fetchAsyncPlaylists } from "~/pages/Main/playlistSlice.js";

function PlaylistCollection() {
  const dispatch = useDispatch();

  const allPlaylists = useSelector((state) => state.playlists.playlists);
  const playlistCollection = allPlaylists
    .filter(
      (playlist) => playlist.liked === true || playlist.type === "created"
    )
    .reverse();

  const likedSongPlaylistInfo = useSelector(
    (state) => state.playlists.likedSongPlaylistInfo
  );

  useEffect(() => {
    if (allPlaylists.length === 0) {
      dispatch(fetchAsyncPlaylists());
    }
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4} lg={2.4}>
        <Link to="/collection/tracks">
          <PlaylistCard playlist={likedSongPlaylistInfo} />
        </Link>
      </Grid>
      {playlistCollection &&
        playlistCollection.map((playlist) => (
          <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
            <ContextMenu
              useFor={playlist.topicId || playlist.type}
              playlist={playlist}
            >
              <Link to={`/playlist/${playlist.id}`}>
                <PlaylistCard playlist={playlist} />
              </Link>
            </ContextMenu>
          </Grid>
        ))}
    </Grid>
  );
}

export default PlaylistCollection;
