import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Main from '~/pages/Content/Main';
import Search from '~/pages/Content/Search';
import Library from '~/pages/Content/Library';
import LikeSong from '~/pages/Content/LikeSong';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Main />}></Route>
        <Route path="search" element={<Search/>} />
        <Route path="library" element={<Library/>} />
        <Route path="likesong" element={<LikeSong/>} />
      </Route>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default App;
