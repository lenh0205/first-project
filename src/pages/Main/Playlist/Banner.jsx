import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";
import Box from "@mui/material/Box";

const cx = classNames.bind(styles);

function Banner({ playlistInfo }) {
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom left, #513a9f, #271c4e)",
        display: 'flex',
        pb: 3,
        pl: 4,
        pt: 10
      }}
    >
      <Grid
        container
      >
        <Grid item xs={12} md={2.6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              height: 1,
            }}
          >
            <img
              src={playlistInfo.img}
              alt="liked song"
              className={cx("like-img")}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{ pl: 3 }}
          >
            <Typography variant="subtitle2">PLAYLIST</Typography>
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              {playlistInfo.name}
            </Typography>
            <Typography variant="subtitle1">{playlistInfo.sub}</Typography>
            <Typography variant="subtitle2" component="span">
              User{" "}
            </Typography>
            <Typography variant="body2" component="span">
              songs
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner;
