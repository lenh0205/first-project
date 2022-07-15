import AddBoxIcon from "@mui/icons-material/AddBox";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogoImage } from "~/assets/images";
import { useUserAuth } from "~/context/UserAuthContext";
import { switchMode, toggleDrawer } from "~/pages/Main/layoutSlice";
import {
  createNewPlaylist,
  increasePlaylistNumberOrder,
} from "~/pages/Main/playlistSlice.js";
import PageNav from "./PageNav";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';

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

export default function Drawer() {
  const { user } = useUserAuth();

  const mode = useSelector(state => state.layout.mode)

  const dispatch = useDispatch();
  const open = useSelector((state) => state.layout.open);
  const drawerWidth = useSelector((state) => state.layout.drawerWidth);

  const newPlaylistNumberOrder = useSelector(
    (state) => state.playlists.newPlaylistNumberOrder
  );

  const handleCreatedPlaylist = () => {
    dispatch(
      createNewPlaylist({
        name: `My Playlist #${newPlaylistNumberOrder}`,
        sub: `By ${user.email}`,
        img: "https://lh3.googleusercontent.com/pw/AM-JKLX7We61NcUNoUR2edboKDjI7MW1r1ZsGnBFtipSJ1gp5W-Z4kEqOhmlFYSYw_Uzbqg0abN_o4EkgNQEDyeaEFbLItZAMQCAg4mEw9EEn7KqG9R4i7wboo-aSMpq8bkAODM0YL-HEbiD5QmhbI8FW9PH=w372-h616-no?authuser=0",
        type: "created",
      })
    );
    dispatch(increasePlaylistNumberOrder(newPlaylistNumberOrder + 1));
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
          {open && <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      {/* Main List */}
      <List component="nav">
        <PageNav to="/" primary="Home" icon={<HomeOutlinedIcon/>} activeIcon={<HomeIcon />}/>
        <PageNav to="/search" primary="Search" icon={<SearchIcon />} activeIcon={<SearchOutlinedIcon/>}/>
        <PageNav
          to="/collection"
          primary="Your Library"
          icon={<LibraryMusicOutlinedIcon/>}
          activeIcon={<LibraryMusicIcon />}
        />

        <Divider sx={{ my: 1, borderColor: "transparent" }} />

        {/* Create Playlist Button */}
        <ListItemButton
          onClick={handleCreatedPlaylist}
          sx={{
            paddingLeft: 3,
          }}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItemButton>

        <PageNav
          to="/collection/tracks"
          primary="Liked Songs"
          icon={<FavoriteBorderIcon />}
          activeIcon={<FavoriteOutlinedIcon/>}
        />

        <Divider sx={{ mx: 3 }} />

        <ListItemButton
          component="a"
          href="#simple-list"
          sx={{
            paddingLeft: 3,
          }}
        >
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <Switch
            onChange={(e) => dispatch(switchMode(mode))}
          />
        </ListItemButton>
      </List>
    </DrawerCuz>
  );
}
