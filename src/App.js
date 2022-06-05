import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LikeSong from '~/pages/Main/LikeSong';
import Library from '~/pages/Main/Library/Library';
import Search from '~/pages/Main/Search/Search';
import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Main from './pages/Main';
import Home from './pages/Main/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />}></Route>
        <Route path="search" element={<Search />} />
        <Route path="library" element={<Library />} />
        <Route path="likesong" element={<LikeSong />} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
