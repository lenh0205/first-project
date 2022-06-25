import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LikeSong from '~/pages/Main/LikeSong';
import Library from '~/pages/Main/Library/Library';
import Search from '~/pages/Main/Search/Search';
import SignIn from '~/pages/Auth/LogIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';
import Home from '~/pages/Main/Home';
import Playlist from '~/pages/Main/Playlist'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
        <Route path="library" element={<Library />} />
        <Route path="likesong" element={<LikeSong />} />
        <Route path="playlist" >
          <Route path=':playlistId' element={<Playlist />} />
        </Route>
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
