import React from "react";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import NonFollow from "./NonFollow";

function ArtistCollection() {
  const artist = false;
  return (
    <React.Fragment>
      {artist ? (
        <div>Some Artist</div>
      ) : (
        <NonFollow icon={<RecordVoiceOverIcon sx={{ fontSize: 70}}/>} name="artist" />
      )}
    </React.Fragment>
  );
}

export default ArtistCollection;
