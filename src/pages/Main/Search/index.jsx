import React from "react";
import Box from "@mui/material/Box";
import AppBar from "~/pages/Main/components/AppBar";
import SearchBox from "./SearchBox";
import SearchContent from "./SearchContent";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIPadAppBar from "./SearchIPadAppBar";

function Search() {
  const theme = useTheme();
  const iPadMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      {iPadMatch ? (
        <SearchIPadAppBar/>
      ) : (
        <AppBar>
          <SearchBox />
        </AppBar>
      )}

      <SearchContent />
    </Box>
  );
}

export default Search;
