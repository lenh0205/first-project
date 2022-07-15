import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useUserAuth } from "~/context/UserAuthContext";
import Box from "@mui/material/Box";

function UserSetting() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { logOut } = useUserAuth();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Chip
        label="Upgrade"
        variant="outlined"
        color="secondary"
        onClick={() => console.log("premium")}
        sx={{
          marginRight: "30px",
          width: "90px",
          fontSize: "1.4rem",
          fontWeight: "700",
        }}
      />
      <Chip
        avatar={<Avatar src={"chưa có"} />}
        label="Avatar"
        variant="outlined"
        onDelete={() => console.log("user menu")}
        deleteIcon={<ArrowDropDownIcon />}
        onClick={handleOpenMenu}
        sx={{
          fontSize: "1.4rem",
          marginRight: "6px",
          minWidth: "147px",
          fontWeight: "700",
          justifyContent: "space-between",
        }}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        sx={{
          mt: 1,
        }}
      >
        <MenuItem
          onClick={handleLogOut}
          sx={{
            width: 180,
          }}
        >
          Logout
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}

export default UserSetting;
