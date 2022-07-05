
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "~/pages/Main/components/AppBar/AppBar";
import TopicTitle from "./TopicTitle";
import TopicPlaylists from "./TopicPlaylists";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncPlaylists } from "~/pages/Main/playlistSlice.js";

export default function Home() {
  const [toppics, setToppics] = useState([]);
  const playlists = useSelector(state => state.playlists.playlists)

  const dispatch = useDispatch()

  useEffect(() => {
    const getToppicsAngPlaylists = async () => {
      const toppics = await axios.get(
        "https://lenh-json-server.herokuapp.com/api/topic"
      );
      setToppics(toppics.data);
    };
    getToppicsAngPlaylists().catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncPlaylists())
  }, [dispatch])

  return (
    <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
      <AppBar />
      {/* Content */}
      <Box>
        <Grid container direction="column" spacing={5}>
          {toppics.map((toppic) => (
            <Grid key={toppic.id} container item direction="column" spacing={3}>
              <TopicTitle toppic={toppic}/>
              <TopicPlaylists playlists={playlists} toppic={toppic}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
