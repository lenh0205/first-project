import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WhiteButton from "~/pages/Main/components/Button/WhiteButton";
import { Link } from "react-router-dom";
import SvgIcon from "@mui/material/SvgIcon";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    background: {
      default: "#000",
    },
  },
});

function PageNotFound() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.default",
          color: "#fff",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <SvgIcon
              viewBox="0 0 60 60"
              sx={{
                width: 60,
                height: 60,
              }}
            >
              <path
                d="M30 0C13.4314 0 0 13.4314 0 30C0 46.5686 13.4314 60 30 60C46.5686 60 60 46.5686 60 30C60 13.4314 46.5686 0 30 0ZM44.6346 43.2461C44.4675 43.5452 44.243 43.8084 43.974 44.0207C43.705 44.2329 43.3968 44.3901 43.067 44.4831C42.7372 44.5762 42.3923 44.6033 42.052 44.5629C41.7118 44.5225 41.3828 44.4155 41.0839 44.2479C37.3441 42.1507 33.2113 40.8488 28.9446 40.4239C24.6689 39.984 20.3484 40.4315 16.2536 41.7386C15.5983 41.9361 14.8916 41.8683 14.2859 41.5497C13.6802 41.2311 13.2239 40.6872 13.0155 40.0353C12.807 39.3834 12.8631 38.6757 13.1716 38.0647C13.4801 37.4538 14.0163 36.9885 14.6646 36.7693C19.4411 35.2409 24.4823 34.7181 29.4707 35.2339C34.4487 35.7303 39.2705 37.2495 43.6339 39.6964C43.9328 39.8637 44.1958 40.0882 44.4079 40.3572C44.6199 40.6261 44.7769 40.9342 44.8699 41.2639C44.9628 41.5935 44.9898 41.9383 44.9495 42.2784C44.9091 42.6185 44.8021 42.9473 44.6346 43.2461ZM48.2282 34.1346C48.07 34.4385 47.8534 34.7081 47.591 34.9283C47.3285 35.1484 47.0252 35.3146 46.6984 35.4175C46.3717 35.5204 46.0279 35.5579 45.6866 35.5279C45.3454 35.4978 45.0134 35.4009 44.7096 35.2425C40.1053 32.8432 35.0849 31.3457 29.9186 30.8304C24.719 30.2897 19.464 30.7576 14.4418 32.2082C13.7769 32.3989 13.0635 32.318 12.4581 31.9834C11.8527 31.6488 11.4047 31.0877 11.2125 30.4232C11.0212 29.7584 11.1016 29.0449 11.4361 28.4394C11.7706 27.8338 12.3318 27.3859 12.9964 27.1939C18.6596 25.561 24.584 25.0325 30.4468 25.6371C36.2712 26.2201 41.9307 27.9096 47.1214 30.615C47.7347 30.9352 48.1958 31.4858 48.4033 32.1457C48.6109 32.8057 48.5479 33.5211 48.2282 34.1346V34.1346ZM49.5257 26.5543C49.1346 26.5543 48.7371 26.4664 48.3632 26.28C42.8937 23.5532 36.9738 21.8443 30.8925 21.2368C24.8013 20.6061 18.6461 21.0927 12.7296 22.6725C12.0691 22.8275 11.3741 22.7193 10.792 22.3706C10.21 22.0219 9.78655 21.4603 9.61155 20.8047C9.43655 20.1492 9.52372 19.4512 9.85458 18.8588C10.1854 18.2665 10.734 17.8262 11.3839 17.6314C17.9109 15.8911 24.7003 15.3541 31.4196 16.0468C38.1279 16.717 44.6582 18.6023 50.6914 21.6107C51.2167 21.8738 51.6378 22.3065 51.8867 22.8387C52.1356 23.3709 52.1976 23.9715 52.0628 24.5433C51.9279 25.1151 51.6041 25.6247 51.1437 25.9897C50.6833 26.3546 50.1132 26.5535 49.5257 26.5543Z"
                fill="#1ED760"
              ></path>
            </SvgIcon>
          </Grid>
          <Grid item>
            <Typography variant="h3" gutterBottom component="div">
              Page not found
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom>
              We can't seem to find the page you are looking for.
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/">
              <WhiteButton>Home</WhiteButton>
            </Link>
          </Grid>
          <Grid item>Help</Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default PageNotFound;
