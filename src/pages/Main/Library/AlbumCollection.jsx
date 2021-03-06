import React from "react";
import AlbumIcon from "@mui/icons-material/Album";
import NonFollow from "./NonFollow";

function AlbumCollection() {
  const album = false;
  return (
    <React.Fragment>
      {album ? (
        <div>Some Album</div>
      ) : (
        <NonFollow icon={<AlbumIcon sx={{ fontSize: 70}}/>} name="album" />
      )}
    </React.Fragment>
  );
}

export default AlbumCollection;
