import { useSelector } from "react-redux";
import Playlist from "../Playlist";

function LikeSong() {
  const likedSongPlaylistInfo = useSelector(
    (state) => state.playlists.likedSongPlaylistInfo
  );

  const songs = useSelector((state) => state.songs.songs);
  const likedsong = songs.filter((song) => song.liked === true);
  return <Playlist playlistInfo={likedSongPlaylistInfo} songs={likedsong} />;
}

export default LikeSong;
