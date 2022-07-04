import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Drawer from "~/pages/Main/components/Drawer";
import PlayBack from "~/pages/Main/components/PlayBack/PlayBack";

export default function Main() {
  const [mode, setMode] = useState("light");

  const isOpenPlayBack = useSelector((state) => state.songs.isOpenPlayBack);

  const mdTheme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            background: {
              default: "#fff",
              paper: "#f9f9f9",
              card: "#fff",
              appbar: "#fffffffa",
            },
          }
        : {
            background: {
              default: "#000",
              paper: "#121212",
              card: "#181818",
              appbar: "#070707",
            },
          }),
      secondary: {
        main: "#1ed760",
      },
    },
  });

  return (
    <ThemeProvider theme={mdTheme}>
      <Box
        sx={{ display: "flex" }}
        bgcolor="background.default"
        color={"text.primary"}
      >
        <CssBaseline />

        <Drawer mode={mode} setMode={setMode} />
        <Box
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
        {isOpenPlayBack && <PlayBack />}
      </Box>
    </ThemeProvider>
  );
}
