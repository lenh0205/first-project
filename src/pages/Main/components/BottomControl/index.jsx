import React from "react";
import Box from "@mui/material/Box";
import PlayBack from "~/pages/Main/components/PlayBack";
import BottomNav from "~/pages/Main/components/BottomNav";
import { useSelector } from "react-redux";

function BottomControl() {
  const isOpenPlayBack = useSelector((state) => state.songs.isOpenPlayBack);

  return (
    <Box
      container
      position="fixed"
      bottom={0}
      height={120}
      zIndex={(theme) => theme.zIndex.drawer + 3}
    >
      {isOpenPlayBack && <PlayBack />}
      <BottomNav />
    </Box>
  );
}

export default BottomControl;
