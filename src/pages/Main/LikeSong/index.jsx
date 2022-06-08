import styles from "./LikeSong.module.scss";
import classNames from "classnames/bind";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PlayButton from "~/components/PlayButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const cx = classNames.bind(styles);

function LikeSong() {
  return (
    <Grid container direction="column" sx={{ height: "100vh" }}>
      {/* title section */}
      <Grid
        container
        item
        xs={6}
        spacing={3}
        alignItems="flex-end"
        sx={{ paddingX: 4, paddingBottom: 3 }}
        className={cx("title")}
      >
        <Grid item xs={2.7} alignItems="flex-end">
          <img
            src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
            alt="liked song"
            className={cx("like-img")}
          />
        </Grid>
        <Grid container item xs direction="column">
          <Grid item>
            <Typography variant="subtitle2">PLAYLIST</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 700 }}>
              Liked Songs
            </Typography>
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

      {/* content section */}
      <Grid item xs={6} className={cx("content")}>
        <Box sx={{ paddingX: 4, paddingY: 3 }}>
          <PlayButton />
        </Box>

        {/* sticky UI tabs */}
        <Grid
          container
          direction="row"
          spacing={2}
          paddingX={6}
          height={36}
          alignItems="center"
        >
          <Grid item xs={0.4}>
            <Typography variant="overline" display="block">
              #
            </Typography>
          </Grid>
          <Grid item xs={4.8}>
            <Typography variant="overline" display="block">
              title
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="overline" display="block">
              album
            </Typography>
          </Grid>
          <Grid item xs={2.2}>
            <Typography variant="overline" display="block">
              date added
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccessTimeIcon fontSize="1.6rem" />
          </Grid>
        </Grid>

        {/* All songs */}
        <Stack sx={{ paddingX: 4, paddingTop: 2, paddingBottom: 4 }}>
          {/* Each song */}
          <Grid container spacing={2} height="56px" alignItems="center">
            <Grid item xs={0.4} >
              1
            </Grid>
            <Grid
              item
              xs={4.8}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar
                variant="square"
                alt="song image"
                src="https://i.scdn.co/image/ab67616d0000485166c2e7502496879febc8cccd"
              />
              <Stack paddingLeft={2}>
                <Typography variant="subtitle1">Như con mèo</Typography>
                <Typography variant="body2">
                  Tạ Quang Thắng, Kai Đinh
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body2">The Other Side</Typography>
            </Grid>
            <Grid item xs={2.2}>
              <Typography variant="body2">4 day ago</Typography>
            </Grid>
            <Grid item xs={1.6} sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
              <Box>
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              </Box>
              <Box>3:18</Box>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default LikeSong;
