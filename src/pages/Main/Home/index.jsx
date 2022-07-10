import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "~/pages/Main/components/AppBar";
import { fetchAsyncPlaylists } from "~/pages/Main/playlistSlice.js";
import TopicPlaylists from "./TopicPlaylists";
import TopicTitle from "./TopicTitle";

export default function Home() {
  const [toppics, setToppics] = useState([]);
  const playlists = useSelector((state) => state.playlists.playlists);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToppics = async () => {
      const toppics = await axios.get(
        "https://lenh-json-server.herokuapp.com/api/topic"
      );
      setToppics(toppics.data);
    };
    fetchToppics().catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    dispatch(fetchAsyncPlaylists());
  }, [dispatch]);

  return (
    <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
      <AppBar />
      {/* Content */}
      <Box>
        <Grid container direction="column" spacing={5}>
          {toppics.map((toppic) => (
            <Grid key={toppic.id} container item direction="column" spacing={3}>
              <TopicTitle toppic={toppic} />
              <TopicPlaylists playlists={playlists} toppic={toppic} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
