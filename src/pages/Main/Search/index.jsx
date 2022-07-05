import React from 'react';
import Box from "@mui/material/Box";
import AppBar from "~/pages/Main/components/AppBar/AppBar";
import SearchBox from './SearchBox';
import Content from './Content';

function Search() {
  return (
    <Box>
      <AppBar >
        <SearchBox/>
      </AppBar>
      <Content/>
    </Box>
  )
}

export default Search