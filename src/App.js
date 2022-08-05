import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/About';
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App ()  {
  //state to keep track current section
  return (
    <BrowserRouter>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  );
}

export default App;
