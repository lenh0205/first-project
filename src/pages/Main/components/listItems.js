import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SearchIcon from '@mui/icons-material/Search';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";
import * as React from "react";
import { Link } from 'react-router-dom';

const ListItemButtonCuz = styled(ListItemButton)({
    paddingLeft: 24
});

export const mainListItems = (
    <React.Fragment>
        <Link to="/">
            <ListItemButtonCuz>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButtonCuz>
        </Link>
        <Link to="/search">
            <ListItemButtonCuz>
                <ListItemIcon>
                    <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
            </ListItemButtonCuz>
        </Link>
        <Link to="/library">
            <ListItemButtonCuz>
                <ListItemIcon>
                    <LibraryMusicIcon />
                </ListItemIcon>
                <ListItemText primary="Your Library" />
            </ListItemButtonCuz>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListItemButtonCuz>
            <ListItemIcon>
                <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Create Playlist" />
        </ListItemButtonCuz>
        <Link to="/likesong">
            <ListItemButtonCuz>
                <ListItemIcon>
                    <FavoriteBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Liked Songs" />
            </ListItemButtonCuz>
        </Link>
    </React.Fragment>
);


