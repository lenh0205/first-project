import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useSelector } from "react-redux";
import BottomNav from "~/pages/Main/components/BottomNav";
import PlayBack from "~/pages/Main/components/PlayBack";
import Divider from "@mui/material/Divider";

function BottomControl() {
  const theme = useTheme();
  const iPadMatch = useMediaQuery(theme.breakpoints.down("md"));

  const isOpenPlayBack = useSelector((state) => state.songs.isOpenPlayBack);

  return (
    <Box
      container
      position="fixed"
      bottom={0}
      zIndex={(theme) => theme.zIndex.drawer + 3}
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {isOpenPlayBack && <PlayBack />}
      <Divider
        sx={{
          width: 1,
        }}
      />
      {iPadMatch && <BottomNav />}
    </Box>
  );
}

export default BottomControl;
