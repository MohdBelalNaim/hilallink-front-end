import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './screens/Home';
import BasicDetails from './screens/signup/BasicDetails';
import UserName from './screens/signup/UserName';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup/basic-details" element={<BasicDetails/>} />
        <Route path="/signup/username" element={<UserName/>} />
      </Routes>
    </Router>
  );
}

export default App;
