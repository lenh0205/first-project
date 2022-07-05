import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import classNames from "classnames/bind";
import styles from "./Playlist.module.scss";

const cx = classNames.bind(styles);

function Banner({ playlistInfo }) {
  return (
    <Grid
      container
      spacing={3}
      height="58vh"
      alignItems="flex-end"
      sx={{ paddingX: 4, paddingBottom: 3 }}
      className={cx("title")}
    >
      <Grid item xs={3} alignItems="flex-end">
        <img src={playlistInfo.img} alt="liked song" className={cx("like-img")} />
      </Grid>
      <Grid container item xs direction="column">
        <Grid item>
          <Typography variant="subtitle2">PLAYLIST</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1" sx={{ fontWeight: 700 }}>
            {playlistInfo.name}
          </Typography>
          <Typography variant="subtitle1">{playlistInfo.sub}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" component="span">
            User{" "}
          </Typography>
          <Typography variant="body2" component="span">
            songs
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Banner;
