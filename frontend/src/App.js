import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DoNotRecommendPage from './pages/DoNotRecommendPage';
import MapPage from './pages/MapPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/do-not-recommend" element={<DoNotRecommendPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
};

export default App;
