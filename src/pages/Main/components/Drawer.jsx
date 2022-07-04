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
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { LogoImage } from "~/assets/images";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "~/pages/Main/layoutSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.layout.open);
  const drawerWidth = useSelector(state => state.layout.drawerWidth)

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
        <ListItemButtonCuz>
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItemButtonCuz>
        <ListItemButtonCuz
          onClick={() => {
            navigate("/playlist/likedsong", {
              state: {
                name: "Liked Songs",
                img: "https://lh3.googleusercontent.com/VrJUrWltEytSUtixqAw6gwbVQLSEX8pKLFkrWngNcXBUg1YYyMsrKenpLOIvZHbsd_S4g_qoYc9OjG7NgL-z2J9GNwyRHBtmbOLM4nE5s9oJpMRDrVZvcE0NQBS1B2AdLG64zhcENS4GVZ6st0qL6lYHsAcuYcDyCsMsuERsAYNARc8qWx_23oO4mNSprrJdDG7kpsHyJGwyI44ZNlS9hght5nUm3zoY6TvWnXb1I2fWFIBqy8PD2_tQblBZoBW6M2Zv2asbJBggKixRZmbCCBwnvBWl0y98_18yn73RwZGizKSTLPdh0Pv4ub3Rz6j6xgbp4K9iljwtBjQ-N0DUR38CB2aic1r3Y9azeZQUBkDx-wQ4_wCcpHs2n1WNcwUpHULA97hXgoAhrSftTqV840qiQ1yQV-9cxD_06Aw8-cSPWA95m6pRHJsFUUbw1MGyT_K8aV3DIVMz_TMo7rDqIlaFRCB2bkrrANFlLcADZcmZ1oK-0zOHluT9v2Tdpk0rhAkuaeMEjZCgo117_nnQp7PSX0bbOqu2pmLNi-wxxdb96MPYBT9Sa-BXXB85wcbkBIgJkUQg7p8B5JV4EXn98yAtRQjIT1BKBDOpY9WXKwtyTBs0NQJUTp8TlEn1718At1Ogpryi7IUvgtAoRJb40UdRg4EVzNi1WjUQ7itpJWsNLZ_1sqT0y7hCrreVftahkG53V1wx8P5r7pSPUCMUwLOVg3xo0DSo5LKnqxNlfiL_xh-fAt-ZK3SWhHGlN5lCrglcRJ_pPz6ATGk9H5cP6s86ZXphrq0KliA=s300-no?authuser=0",
              },
            });
          }}
        >
          <ListItemIcon>
            <FavoriteBorderIcon />
          </ListItemIcon>
          <ListItemText primary="Liked Songs" />
        </ListItemButtonCuz>
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
