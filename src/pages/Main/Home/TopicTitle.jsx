import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function TopicTitle({ toppic }) {
  return (
    <Grid
      item
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Typography variant="h5" component="div" fontWeight={700}>
        {toppic.name}
      </Typography>
      <Typography variant="caption" sx={{ fontWeight: 700 }}>
        SEE ALL
      </Typography>
    </Grid>
  );
}

export default TopicTitle;
