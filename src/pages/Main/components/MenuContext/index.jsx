import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useState } from "react";

export default function ContextMenu({ children }) {
  const [contextMenu, setContextMenu] = useState(null);

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
    console.log('hello')
    setContextMenu(null);
  };

  const handleDelete = () => {
    
    setContextMenu(null);
  }

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: "context-menu" }}>
      <Box>{children}</Box>
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
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
