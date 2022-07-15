import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from '~/components/PageNotFound/index.jsx';
import ProtectedRoute from '~/components/ProtectedRoute/index.jsx';
import { MainPageContextProvider } from '~/context/MainPageContext.js';
import { UserAuthContextProvider } from '~/context/UserAuthContext.js';
import LogIn from '~/pages/Auth/Login';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';
import Home from '~/pages/Main/Home';
import Library from '~/pages/Main/Library';
import AlbumCollection from '~/pages/Main/Library/AlbumCollection';
import ArtistCollection from '~/pages/Main/Library/ArtistCollection';
import PlaylistCollection from '~/pages/Main/Library/PlaylistCollection';
import PodcastCollection from '~/pages/Main/Library/PodcastCollection';
import LikeSong from '~/pages/Main/LikeSong';
import Playlist from '~/pages/Main/Playlist';
import Search from '~/pages/Main/Search';
import GetApp from "~/pages/Main/GetApp";

function App() {
  const mode = useSelector(state => state.layout.mode)

  const mainTheme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
          background: {
            default: "#fff",
            paper: "#f9f9f9",
            card: "#fff",
            appbar: "#fffffffa",
            text: "#000"
          },
        }
        : {
          background: {
            default: "#000",
            paper: "#121212",
            card: "#181818",
            appbar: "rgb(32, 16, 96)",
            text: "#fff"
          },
        }),
      secondary: {
        main: "#1ed760",
      },
    },
  });
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={
          <ThemeProvider theme={mainTheme}>
            <MainPageContextProvider>
              <Main />
            </MainPageContextProvider>
          </ThemeProvider>
        }>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="playlist">
            <Route index element={<div>Nothing here</div>} />
            <Route path=':playlistId' element={<Playlist />} />
          </Route>
          <Route path="collection" element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }>
            <Route index element={<Navigate replace to="/collection/playlists" />} />
            <Route path="playlists" element={<PlaylistCollection />} />
            <Route path="podcasts" element={<PodcastCollection />} />
            <Route path="artists" element={<ArtistCollection />} />
            <Route path="albums" element={<AlbumCollection />} />
          </Route>
          <Route path="collection/tracks" element={
            <ProtectedRoute>
              <LikeSong />
            </ProtectedRoute>
          } />
          <Route path="upsell" element={<GetApp />} />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
