import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

function PageNav({ to, primary, icon }) {
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
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </NavLink>
  );
}

export default PageNav;
