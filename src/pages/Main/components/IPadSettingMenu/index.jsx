import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useUserAuth } from "~/context/UserAuthContext";

function SettingMenu({ setOpenSetting }) {
  const { logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
    setOpenSetting(false)
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "#000",
        zIndex: (theme) => theme.zIndex.drawer + 2,
      }}
    >
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 1
        }}
        onClick={() => setOpenSetting(false)}
      >
        <CloseIcon />
      </IconButton>

      <List sx={{
        pt: 6
      }}>
        <ListItem disablePadding
          onClick={() => handleLogOut()}
        >
          <ListItemButton>
            <ListItemText primary="Log Out"
                sx={{
                    fontWeight: 700,
                }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding
          onClick={() => handleLogOut()}
        >
          <ListItemButton>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default SettingMenu;
