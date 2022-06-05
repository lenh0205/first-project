import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from "axios";
import ToppicSong from '~/components/ToppicSong';

export default function Main() {
  const [toppics, setToppics] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    const getToppic = async () => {
      const res = await axios.get("http://localhost:3001/topic")
      setToppics(res.data)
    }
    getToppic()

    const getPlaylist = async () => {
      const res = await axios.get("http://localhost:3001/playlist")
      setPlaylists(res.data)
    }
    getPlaylist()
  }, [])
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.paper",
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
        {/* End hero unit */}
        <Grid container spacing={5}>
          {toppics.map(toppic => (
            <ToppicSong
              key={toppic.id}
              toppic={toppic}
              playlists={playlists}
            />
          ))}
        </Grid>
      </Container>
    </Box>

  )
}
