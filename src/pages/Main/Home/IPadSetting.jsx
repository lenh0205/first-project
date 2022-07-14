import React, { useState } from 'react'
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingMenu from '~/pages/Main/components/IPadSettingMenu';

function IPadSetting() {
    const [openSetting, setOpenSetting] = useState(false)
  return (
    <Box
        sx = {{
            pb: 3,
            display: 'flex',
            justifyContent: 'flex-end'
        }}
    >
        <IconButton component="span">
            <NotificationsNoneOutlinedIcon/>
        </IconButton>
        <IconButton component="span"
            onClick={() => setOpenSetting(true)}
        >
            <SettingsOutlinedIcon/>
        </IconButton>
        {openSetting && <SettingMenu setOpenSetting={setOpenSetting}/>}
    </Box>
  )
}

export default IPadSetting