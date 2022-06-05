import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

function ToppicSong({ toppic, playlists }) {
    

    return (
        <Grid container item xs={12} spacing={3}>
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-end"
                }}
            >
                <Typography variant="h5" component="div" fontWeight={700}>{toppic.name}</Typography>
                <Typography variant="caption" sx={{ fontWeight: 700 }} >SEE ALL</Typography>
            </Grid>
            {playlists.map(playlist => (
                <Grid item key={playlist.id} xs={12} sm={6} md={4} lg={2.4}>
                    <Card
                        sx={{ 
                            height: 267, 
                            display: 'flex', 
                            flexDirection: 'column', 
                            p: 2, 
                            position: "relative",
                            backgroundColor: "background.card"
                        }}
                    >
                        <CardMedia
                            component="img"
                            sx={{
                                height: 158,
                                mb: 2
                            }}
                            image={playlist.img}  
                            // image="https://source.unsplash.com/random"
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
                                    textOverflow: "ellipsis"
                                }}
                                variant="h5"
                                component="h2">
                                {playlist.name}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 400,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
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
                                height: 50,
                                width: 50,
                                justifyContent: "center",
                                backgroundColor: "#1ed760",
                                borderRadius: "50%",
                            }}
                        >
                            <IconButton aria-label="delete" sx={{ color: "#000" }}>
                                <PlayArrowIcon fontSize='large' />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))}

        </Grid>

    )
}

export default ToppicSong