import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LikeSong from '~/pages/Main/LikeSong';
import Library from '~/pages/Main/Library';
import Search from '~/pages/Main/Search';
import SignIn from '~/pages/Auth/LogIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';
import Home from '~/pages/Main/Home';
import Playlist from '~/pages/Main/Playlist'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import PlaylistCollection from '~/pages/Main/Library/PlaylistCollection';
import PodcastCollection from '~/pages/Main/Library/PodcastCollection';
import ArtistCollection from '~/pages/Main/Library/ArtistCollection';
import AlbumCollection from '~/pages/Main/Library/AlbumCollection';

// Configure Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // ...
};
firebase.initializeApp(config);

function App() {
  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // user logs out, handle something here
        console.log('User is not logged in')
        return
      }
      // user đã đăng nhập -> log thông tin ra
      // console.log(`Logged in user: `, user.multiFactor)

      const token = await user.getIdToken()
      // console.log(`Logged in token: `, token)
    });
    return () => unregisterAuthObserver();
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="likesong" element={<LikeSong />} />
        <Route path="playlist" >
          <Route path=':playlistId' element={<Playlist />} />
        </Route>
        <Route path="collection" element={<Library />}>
          <Route index element={<Navigate replace to="/collection/playlists" />} />
          <Route path="playlists" element={<PlaylistCollection />} />
          <Route path="podcasts" element={<PodcastCollection />} />
          <Route path="artists" element={<ArtistCollection />} />
          <Route path="albums" element={<AlbumCollection />} />
        </Route>
        {/* <Route path="collection" element={<Navigate replace to="/collection/playlists" />} /> */}
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
