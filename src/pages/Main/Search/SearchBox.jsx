import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import useDebounce from "~/hooks/useDebounce";
import { fetchSearchResult, setSearchResult } from "~/pages/Main/playlistSlice";
import ClearIcon from "@mui/icons-material/Clear";

function SearchBox() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef();

  const debounced = useDebounce(searchValue, 500);

  const handleClear = () => {
    setSearchValue("");
    dispatch(setSearchResult([]));
    inputRef.current.focus();
  };

  useEffect(() => {
    if (!debounced.trim()) {
      dispatch(setSearchResult([]));
      return;
    }

    dispatch(
      fetchSearchResult({
        name_like: searchValue,
      })
    );
  }, [debounced, dispatch]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: { xs: 1, md: 400 },
        backgroundColor: "#fff",
        borderRadius: { xs: 1, md: 8 },
      }}
    >
      <IconButton sx={{ p: "10px", color: "#000" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        inputRef={inputRef}
        inputComponent="input"
        sx={{ ml: 1, flex: 1, color: "#000" }}
        placeholder="Artists, songs, or podcasts"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <IconButton
        sx={{ p: "10px", color: "#000" }}
        aria-label="delete"
        onClick={handleClear}
      >
        <ClearIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBox;
