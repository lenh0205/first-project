import { Divider, IconButton, List, ListItemButton, ListItemIcon, Switch, Toolbar } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/system';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';
import { mainListItems, secondaryListItems } from './listItems';
import { LogoImage } from '~/assets/images';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const DrawerCuz = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            zIndex: theme.zIndex.drawer + 1,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            position: 'relative',
            whiteSpace: 'nowrap',
            elevation: 3,
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                zIndex: 1,
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

export default function Drawer({ toggleDrawer, open, mode, setMode }) {
    return (
        <DrawerCuz variant="permanent" open={open} >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pr: 1,
                    pl: 2,
                    pt: 2,
                    pb: "4px"
                }}
            >
                {open && (
                    <Link to="/">
                        <IconButton sx={{ color: "#1ed760" }} disableRipple >  
                            <LogoImage height="40px" />
                        </IconButton>
                    </Link>
                )}
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <List component="nav">
                {mainListItems}
                <Divider sx={{ my: 1, borderColor: "transparent" }} />
                {secondaryListItems}
                <Divider sx={{ mx: 3 }} />

                <ListItemButton component="a" href="#simple-list">
                    <ListItemIcon>
                        <DarkModeIcon />
                    </ListItemIcon>
                    <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} />
                </ListItemButton>
            </List>
        </DrawerCuz>
    )
}
