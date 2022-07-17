import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import PlaylistCard from "../components/PlaylistCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import React from "react";

function TopicPlaylists({ toppic, playlists }) {
  const theme = useTheme();
  const iPadMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      {iPadMatch ? (
        <Box
          sx={{
            display: 'flex',
            maxWidth: 1 ,
            overflowX: 'auto',
            marginTop: 3,
            paddingLeft: 3,
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {playlists
            .filter((playlist) => playlist.topicId === toppic.id)
            .map((playlist) => (
                <Link to={`playlist/${playlist.id}`}>
                  <PlaylistCard playlist={playlist} />
                </Link>
            ))}
        </Box>
      ) : (
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
      )}
    </React.Fragment>
  );
}

export default TopicPlaylists;
