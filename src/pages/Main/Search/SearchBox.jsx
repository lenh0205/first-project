import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";

function SearchBox() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: {xs: 1, md: 400},
        backgroundColor: "#fff",
        borderRadius: {xs: 1, md:8}
      }}
    >
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "#000" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#000" }}
        placeholder="Artists, songs, or podcasts"
      />
    </Paper>
  );
}

export default SearchBox;
