// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} /> {/* Corrected route path */}
      </Routes>
    </Router>
  );
}

export default App;
