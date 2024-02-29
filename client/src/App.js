
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import overlays from './overlay_components/overlays';
import Topbar from './overlay_components/TopBar';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Oxycomb from './pages/Oxycomb';
import RWProc from './pages/RWProc';
import MethSynth from './pages/MethSynth';
import Electrolysis from './pages/Electrolysis';
import Axios from"axios";



function App () {
  return (
    <Router>
      <div>
        <Topbar />
        {/* <overlays /> */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/overview" element={<Overview/>} />
          <Route path="/rwproc" element={<RWProc/>} />
          <Route path="/electrolyzer" element={<Electrolysis/>} />
          <Route path="/methanolsynthesis" element={<MethSynth/>} />
          <Route path="/oxycombustionproc" element={<Oxycomb/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
