import AddBoxIcon from "@mui/icons-material/AddBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import {
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Switch,
  Toolbar
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoImage } from "~/assets/images";
import { useUserAuth } from "~/context/UserAuthContext";
import { toggleDrawer } from "~/pages/Main/layoutSlice";
import { createNewPlaylist, increasePlaylistNumberOrder } from "~/pages/Main/playlistSlice.js";

const DrawerCuz = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  "& .MuiDrawer-paper": {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    position: "relative",
    whiteSpace: "nowrap",
    elevation: 3,
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      zIndex: 1,
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const ListItemButtonCuz = styled(ListItemButton)({
  paddingLeft: 24,
});

export default function Drawer({ mode, setMode }) {
  const { user } = useUserAuth()

  const dispatch = useDispatch();
  const open = useSelector((state) => state.layout.open);
  const drawerWidth = useSelector((state) => state.layout.drawerWidth);

  const newPlaylistNumberOrder = useSelector(state => state.playlists.newPlaylistNumberOrder)

  const handleCreatedPlaylist = () => {
    dispatch(createNewPlaylist({
      name: `My Playlist #${newPlaylistNumberOrder}`,
      sub: `By ${user.email}`,
      img: 'https://lh3.googleusercontent.com/pw/AM-JKLX7We61NcUNoUR2edboKDjI7MW1r1ZsGnBFtipSJ1gp5W-Z4kEqOhmlFYSYw_Uzbqg0abN_o4EkgNQEDyeaEFbLItZAMQCAg4mEw9EEn7KqG9R4i7wboo-aSMpq8bkAODM0YL-HEbiD5QmhbI8FW9PH=w372-h616-no?authuser=0',
      type: "created"
    }))
    dispatch(increasePlaylistNumberOrder(newPlaylistNumberOrder + 1))
  };

  return (
    <DrawerCuz variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 1,
          pl: 2,
          pt: 2,
          pb: "4px",
        }}
      >
        {open && (
          <Link to="/">
            <IconButton sx={{ color: "#1ed760" }} disableRipple>
              <LogoImage height="40px" />
            </IconButton>
          </Link>
        )}
        <IconButton onClick={() => dispatch(toggleDrawer())}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      {/* Main List */}
      <List component="nav">
        <Link to="/">
          <ListItemButtonCuz>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButtonCuz>
        </Link>
        <Link to="/search">
          <ListItemButtonCuz>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButtonCuz>
        </Link>
        <Link to="/collection">
          <ListItemButtonCuz>
            <ListItemIcon>
              <LibraryMusicIcon />
            </ListItemIcon>
            <ListItemText primary="Your Library" />
          </ListItemButtonCuz>
        </Link>

        <Divider sx={{ my: 1, borderColor: "transparent" }} />

        {/* Sub List */}
        <ListItemButtonCuz onClick={handleCreatedPlaylist}>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItemButtonCuz>
        <Link to="/collection/tracks">
          <ListItemButtonCuz>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Liked Songs" />
          </ListItemButtonCuz>
        </Link>
        <Divider sx={{ mx: 3 }} />

        <ListItemButton component="a" href="#simple-list">
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
        </ListItemButton>
      </List>
    </DrawerCuz>
  );
}
