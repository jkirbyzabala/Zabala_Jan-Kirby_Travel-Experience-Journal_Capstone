import React from 'react'; // Import React for building the UI
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes components for routing
import HomePage from './pages/HomePage'; // Import the HomePage component
import FavoritesPage from './pages/FavoritesPage'; // Import the FavoritesPage component
import DoNotRecommendPage from './pages/DoNotRecommendPage'; // Import the DoNotRecommendPage component
import MapPage from './pages/MapPage'; // Import the MapPage component
import Header from './components/Header'; // Import the Header component
import EntryFormPage from './pages/EntryFormPage'; // Import the EntryFormPage component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/do-not-recommend" element={<DoNotRecommendPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/create-entry" element={<EntryFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
