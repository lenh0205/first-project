import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";

function TopicPlaylists({ toppic, playlists }) {
  return (
    <Grid container item spacing={3}>
      {playlists
        .filter((playlist) => playlist.topicId === toppic.id)
        .map((playlist) => (
          <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
            <Link to={`playlist/${playlist.id}`}>
              <PlaylistCard playlist={playlist} />
            </Link>
          </Grid>
        ))}
    </Grid>
  );
}

export default TopicPlaylists;
