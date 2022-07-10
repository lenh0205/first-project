import React from "react";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import NonFollow from "./NonFollow";

function PodcastCollection() {
  const podcard = false;
  return (
    <React.Fragment>
      {podcard ? (
        <div>Some PodCast</div>
      ) : (
        <NonFollow icon={<PodcastsIcon sx={{ fontSize: 70}}/>} name="podcast" />
      )}
    </React.Fragment>
  );
}

export default PodcastCollection;
