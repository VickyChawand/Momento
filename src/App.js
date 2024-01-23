import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen/home';
import GalleryScreen from './Components/GalleryScreen/gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/gallery" element={<GalleryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
