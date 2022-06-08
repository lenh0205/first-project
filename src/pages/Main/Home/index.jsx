import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PlayButton from "~/components/PlayButton";

export default function Home() {
  const [toppics, setToppics] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const getToppic = async () => {
      const res = await axios.get("http://localhost:3001/topic");
      setToppics(res.data);
    };
    getToppic();

    const getPlaylist = async () => {
      const res = await axios.get("http://localhost:3001/playlist");
      setPlaylists(res.data);
    };
    getPlaylist();
  }, []);
  
  return (
      <Container sx={{ pt: 10, pb: 2 }} maxWidth="lg">
        {/* Songs Playlist by Toppic */}
        <Grid container spacing={5}>
          {toppics.map((toppic) => (
            <Grid key={toppic.id} container item xs={12} spacing={3}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <Typography variant="h5" component="div" fontWeight={700}>
                  {toppic.name}
                </Typography>
                <Typography variant="caption" sx={{ fontWeight: 700 }}>
                  SEE ALL
                </Typography>
              </Grid>
              {/* Each Song */}
              {playlists.map((playlist) => (
                <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
                  <Link to="/playlist">
                    <Card
                      sx={{
                        height: 267,
                        display: "flex",
                        flexDirection: "column",
                        p: 2,
                        position: "relative",
                        backgroundColor: "background.card",
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          height: 158,
                          mb: 2,
                        }}
                        image={playlist.img}
                        alt="random"
                      />
                      <CardContent sx={{ p: 0 }}>
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: "1.6rem",
                            lineHeight: "2.4rem",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          variant="h5"
                          component="h2"
                        >
                          {playlist.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          variant="subtitle2"
                          component="h3"
                        >
                          {playlist.sub}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{
                          position: "absolute",
                          top: 118,
                          right: 24,
                        }}
                      >
                        <PlayButton />
                      </CardActions>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </Container>
    
  );
}
