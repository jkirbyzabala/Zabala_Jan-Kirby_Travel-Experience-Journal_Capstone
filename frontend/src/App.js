import React from 'react'; // Import React for building the UI
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes components for routing
import HomePage from './pages/HomePage'; // Import the HomePage component
import FavoritesPage from './pages/FavoritesPage'; // Import the FavoritesPage component
import DoNotRecommendPage from './pages/DoNotRecommendPage'; // Import the DoNotRecommendPage component
import MapPage from './pages/MapPage'; // Import the MapPage component
import Header from './components/Header'; // Import the Header component
import EntryList from './components/EntryList'; // Import the EntryList component

const App = () => {
  return (
    <Router>
      {/* Render the Header component on all pages */}
      <Header />
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<HomePage />} /> {/* Route for the home page */}
        <Route path="/favorites" element={<FavoritesPage />} /> {/* Route for the favorites page */}
        <Route path="/do-not-recommend" element={<DoNotRecommendPage />} /> {/* Route for the do not recommend page */}
        <Route path="/map" element={<MapPage />} /> {/* Route for the map page */}
        <Route path="/entries" element={<EntryList />} /> {/* Route for the entries page */}
      </Routes>
    </Router>
  );
};

export default App;
