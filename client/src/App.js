
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './overlay_components/TopBar';
import Home from './pages/Home';
import Overview from './pages/Overview';

function App () {
  return (
    <Router>
      <div>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/overview" element={<Overview/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
