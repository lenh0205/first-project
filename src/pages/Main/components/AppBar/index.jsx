import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useMainPageContext } from "~/context/MainPageContext";
import { useUserAuth } from "~/context/UserAuthContext";
import { toggleDrawer } from "~/pages/Main/layoutSlice";
import { LogoImage } from "~/assets/images";
import UserSetting from "./UserSetting";

const AppBarCuz = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidth",
})(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 2,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundImage: "none",
  position: "fixed",
  ...(open && {
    boxShadow: "unset",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const ButtonCuz = styled(Button)({
  fontSize: "1.2rem",
  padding: "13px 35px",
  borderRadius: "25px",
  marginLeft: "8px",
});

export default function AppBar({ children }) {
  const dispatch = useDispatch();
  const { user } = useUserAuth();
  const appbarRef = useRef();

  const open = useSelector((state) => state.layout.open);
  const drawerWidth = useSelector((state) => state.layout.drawerWidth);

  const { leftSideRef } = useMainPageContext();

  useEffect(() => {
    const leftSideElement = leftSideRef.current
    
    if (leftSideElement && appbarRef.current) {
      const handelScroll = () => {
        if (leftSideElement.scrollTop > 80) {
          appbarRef.current.style.backgroundColor = "rgb(32, 16, 96)";
        } else {
          appbarRef.current.style.backgroundColor = "rgba(32, 16, 96, 0)";
        }
      }
      leftSideElement.addEventListener("scroll", handelScroll);

      return () => {
        leftSideElement.removeEventListener("scroll", handelScroll)
      }
    }
  }, [leftSideRef]);

  return (
    <AppBarCuz ref={appbarRef} open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          pr: "24px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={() => dispatch(toggleDrawer())}
              sx={{
                marginRight: "36px",
                color: (theme) => theme.palette.background.text,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <Link to="/">
              <IconButton
                sx={{
                  color: "#1ed760",
                  ...(open && { display: "none" }),
                  flexGrow: 1,
                }}
                disableRipple
              >
                <LogoImage height="40px" />
              </IconButton>
            </Link>
          </Grid>
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {children}
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {user ? (
              <UserSetting />
            ) : (
              <React.Fragment>
                <Link to="/signup">
                  <ButtonCuz>Sign up</ButtonCuz>
                </Link>
                <Link to="/login">
                  <ButtonCuz variant="contained">Log in</ButtonCuz>
                </Link>
              </React.Fragment>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarCuz>
  );
}
