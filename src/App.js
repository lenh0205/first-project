import 'firebase/compat/auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from '~/context/UserAuthContext.js';
import LogIn from '~/pages/Auth/LogIn';
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
import ProtectedRoute from '~/components/ProtectedRoute.js';
import { MainPageContextProvider } from '~/context/MainPageContext.js';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={
          <MainPageContextProvider>
            <Main />
          </MainPageContextProvider>
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
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
