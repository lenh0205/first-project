import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SearchIcon from "@mui/icons-material/Search";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SpotifyIcon } from "~/components/Icons";

function BottomNav() {
  const [value, setValue] = useState("home");

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      sx={{
        width: 1,
        height: 70,
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
        onClick={() => navigate("/")}
      />
      <BottomNavigationAction
        label="Search"
        value="search"
        icon={<SearchIcon />}
        onClick={() => navigate("/search")}
      />
      <BottomNavigationAction
        label="Your Library"
        value="library"
        icon={<LibraryMusicIcon />}
        onClick={() => navigate("/collection")}
      />
      <BottomNavigationAction
        label="Get App"
        value="install"
        icon={<SpotifyIcon />}
        onClick={() => navigate("/upsell")}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
