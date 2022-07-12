import { Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useMainPageContext } from "~/context/MainPageContext";
import BottomControl from "~/pages/Main/components/BottomControl";
import Drawer from "~/pages/Main/components/Drawer";

export default function Main() {
  const leftSideRef = useRef();
  const { setLeftSideRef } = useMainPageContext();

  const theme = useTheme();
  const iPadMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLeftSideRef(leftSideRef);
  }, []);

  return (
    <Box
      sx={{ display: "flex" }}
      bgcolor="background.default"
      color={"text.primary"}
    >
      <CssBaseline />
      {iPadMatch || <Drawer />}
      <Box
        ref={leftSideRef}
        component="main"
        sx={{
          backgroundColor: "background.paper",
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Outlet />
      </Box>
      <BottomControl />
    </Box>
  );
}
