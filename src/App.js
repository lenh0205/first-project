import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LikeSong from '~/pages/Main/LikeSong';
import Library from '~/pages/Main/Library/Library';
import Search from '~/pages/Main/Search/Search';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from '~/pages/Main';
import Home from '~/pages/Main/Home';
import Playlist from '~/pages/Main/Playlist'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}/>
        <Route path="search" element={<Search />} />
        <Route path="library" element={<Library />} />
        <Route path="likesong" element={<LikeSong />} />
        <Route path="playlist" >
          <Route path=':playlistId' element={<Playlist />}/>
        </Route>
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
