import { useSelector } from "react-redux";
import Playlist from "../Playlist";

function LikeSong() {
  const playlistInfo = {
    name: "Liked Songs",
    sub: "",
    img: "https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
  }

  const songs = useSelector(state => state.songs.songs)
  const likedsong = songs.filter(song => song.liked === true)
  return (
    <Playlist  
    playlistInfo={playlistInfo}
    songs={likedsong}
    />
  );
}

export default LikeSong;
