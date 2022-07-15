import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

function PageNav({ to, primary, icon, activeIcon }) {
  return (
    <NavLink to={to}>
      <ListItemButton
        sx={{
          paddingLeft: 3,
          ".active &": {
            color: "#1ed760",
          },
        }}
      >
        <ListItemIcon
          sx={{
            ".active &": {
              display: "none",
            },
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemIcon
          sx={{
            display: 'none',
            ".active &": {
              display: "flex",
            },
          }}
        >
          {activeIcon}
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </NavLink>
  );
}

export default PageNav;
