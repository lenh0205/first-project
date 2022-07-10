import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePlaylist, updateLikedPlaylists } from "~/pages/Main/playlistSlice.js";

export default function ContextMenu({ useFor, playlist, children }) {
  const [contextMenu, setContextMenu] = useState(null);

  const dispatch = useDispatch()

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 10,
            mouseY: event.clientY + 10,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleDelete = (id) => {
    dispatch(deletePlaylist(id))
    setContextMenu(null);
  };

  const removeFromLibrary = (id, liked) => {
    console.log(id, liked)
    dispatch(updateLikedPlaylists(id, liked))
    setContextMenu(null);
  }

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Box>{children}</Box>
      {useFor === "created" ? (
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={() => handleDelete(playlist.id)}>Delete</MenuItem>
          <MenuItem onClick={() => handleDelete(playlist.id)}>Delete</MenuItem>
          <MenuItem onClick={() => handleDelete(playlist.id)}>Delete</MenuItem>
        </Menu>
      ) : (
        <Menu
          open={contextMenu !== null}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={
            contextMenu !== null
              ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={() => removeFromLibrary(playlist.id, playlist.liked)}>Remove from Your Library</MenuItem>
          <MenuItem onClick={() => removeFromLibrary(playlist.id, playlist.liked)}>Remove from Your Library</MenuItem>
          <MenuItem onClick={() => removeFromLibrary(playlist.id, playlist.liked)}>Remove from Your Library</MenuItem>
        </Menu>
      )}
    </div>
  );
}
