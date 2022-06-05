import React, { useState } from 'react'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Drawer from '~/components/Drawer';
import AppBar from '~/components/AppBar';


export default function Main() {
    const [open, setOpen] = useState(true);
    const [mode, setMode] = useState('light')

    const mdTheme = createTheme({
        typography: {
            htmlFontSize: 10,
        },
        palette: {
            mode: mode,
            ...(mode === "light" ? {
                background: {
                    default: "#fff",
                    paper: "#f9f9f9",
                    card: "#fff",
                    appbar: "#fffffffa"
                }
            }
                : {
                    background: {
                        default: "#000",
                        paper: "#121212",
                        card: "#181818",
                        appbar: "#070707"
                    }
                })
        },
    });
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }} bgcolor="background.default" color={"text.primary"}>
                <CssBaseline />

                <Drawer
                    toggleDrawer={toggleDrawer}
                    open={open}
                    mode={mode}
                    setMode={setMode}
                />
                <AppBar
                    toggleDrawer={toggleDrawer}
                    open={open}
                />
                <Outlet />
            </Box>
        </ThemeProvider>
    )
}
