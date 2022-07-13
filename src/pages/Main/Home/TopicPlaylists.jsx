import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import PlayButton from "~/pages/Main/components/Button/PlayButton";
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
