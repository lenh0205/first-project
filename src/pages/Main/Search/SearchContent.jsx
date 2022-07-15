import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import PlaylistCard from "~/pages/Main/components/PlaylistCard";

function SearchContent() {
  const searchResult = useSelector((state) => state.playlists.searchResult);
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 10 },
        pb: 2,
        px: 4,
      }}
      maxWidth="lg"
    >
      <Grid container spacing={3}>
        {searchResult &&
          searchResult.map((playlist) => (
            <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
              <PlaylistCard playlist={playlist} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default SearchContent;
