import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { LogoImage } from '../assets/images';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const alReadySign = false;

const AppBarCuz = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.background.appbar,
    backgroundImage: "none",
    position: 'fixed',
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const ButtonCuz = styled(Button)({
    fontSize: "1.2rem",
    padding: "13px 35px",
    borderRadius: "25px",
    marginLeft: "8px"
})

export default function AppBar({ toggleDrawer, open }) {
    return (
        <AppBarCuz open={open} sx={{backgroundColor: "transparent"}}>
            <Toolbar
                sx={{
                    pr: '24px', // keep right padding when drawer closed
                }}
            >
                <IconButton
                    edge="start"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        color: "#030303",
                        ...(open && { display: 'none' }),
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1, }}
                >
                    <Link to="/">
                        <IconButton sx={{ color: "#1ed760", ...(open && { display: 'none' }), flexGrow: 1 }} disableRipple>
                            <LogoImage height="40px" />
                        </IconButton>
                    </Link>
                </Typography>

                {alReadySign ? (
                    <React.Fragment>
                        <Chip
                            label="Upgrade"
                            variant="outlined"
                            color="secondary"
                            onClick={() => console.log("premium")}
                            sx={{
                                marginRight: "30px",
                                width: "90px",
                                fontSize: "1.4rem",
                                fontWeight: "700"
                            }}
                        />
                        <Chip
                            avatar={<Avatar src={"chưa có"} />}
                            label="Avatar"
                            variant="outlined"
                            onDelete={() => console.log("user menu")}
                            deleteIcon={<ArrowDropDownIcon />}
                            sx={{
                                fontSize: "1.4rem",
                                marginRight: "6px",
                                minWidth: "147px",
                                fontWeight: "700",
                                justifyContent: "space-between"
                            }}
                        />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Link to="/signup">
                            <ButtonCuz>Sign up</ButtonCuz>
                        </Link>
                        <Link to="/login">
                            <ButtonCuz variant="contained">Log in</ButtonCuz>
                        </Link>
                    </React.Fragment>
                )}
            </Toolbar>
        </AppBarCuz>
    )
}
