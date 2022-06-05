import { Box } from '@mui/system'
import React from 'react'
import styles from './LikeSong.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function LikeSong() {
  return (
    <Box
      sx={{ display: 'flex', flex: 1, height: "100vh"}}
      bgcolor="background.default"
      color={"text.primary"}
      className={cx('like-song')}
    >
      <Box sx={{
        height: 295,
        flex: 1
      }}>
        Hello
      </Box>
    </Box>
  )
}

export default LikeSong