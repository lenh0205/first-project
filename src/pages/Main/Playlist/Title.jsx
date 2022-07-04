import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Title() {
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      paddingX={6}
      alignItems="center"
    >
      <Grid item xs={0.4}>
        <Typography variant="overline" display="block">
          #
        </Typography>
      </Grid>
      <Grid item xs={4.8}>
        <Typography variant="overline" display="block">
          title
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="overline" display="block">
          album
        </Typography>
      </Grid>
      <Grid item xs={2.2}>
        <Typography variant="overline" display="block">
          date added
        </Typography>
      </Grid>
      <Grid
        item
        xs={1.6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AccessTimeIcon fontSize="1.6rem" />
      </Grid>
    </Grid>
  );
}

export default Title;
