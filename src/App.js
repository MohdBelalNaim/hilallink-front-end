import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import BasicDetails from './screens/signup/BasicDetails';
import UserName from './screens/signup/UserName';
import Main from './screens/Main';
import PostDetails from './screens/PostDetails';
import Shorts from './screens/Shorts';
import ShortsTest from './screens/ShortsTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup/basic-details" element={<BasicDetails/>} />
        <Route path="/signup/username" element={<UserName/>} />
        <Route path="/home" element={<Main/>} />
        <Route path="/post" element={<PostDetails/>} />
        <Route path="/clips" element={<Shorts/>} />
        <Route path="/clips-test" element={<ShortsTest/>} />
      </Routes>
    </Router>
  );
}

export default App;
