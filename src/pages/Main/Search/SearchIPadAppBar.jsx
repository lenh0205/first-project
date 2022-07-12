import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchBox from "./SearchBox";

function SearchIPadAppBar() {
  return (
    <Box
        sx={{
            px: 2,
            pt: 6
        }}
    >
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontWeight: 700 }}
      >
        Search
      </Typography>
      <SearchBox/>
    </Box>
  );
}

export default SearchIPadAppBar;
