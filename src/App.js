import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import Photos from './components/Photos/Photos';
import Videos from './components/Videos/Videos';
import Contact from './components/Contact/Contact';
import Bio from './components/Bio/Bio';
import AppNavbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;