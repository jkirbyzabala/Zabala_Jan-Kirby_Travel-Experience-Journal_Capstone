// Import necessary modules
import React from 'react'; // Import React for building the UI
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import Router and Route components for routing
import HomePage from './pages/HomePage'; // Import the HomePage component
import FavoritesPage from './pages/FavoritesPage'; // Import the FavoritesPage component
import DoNotRecommendPage from './pages/DoNotRecommendPage'; // Import the DoNotRecommendPage component
import MapPage from './pages/MapPage'; // Import the MapPage component
import Header from './components/Header'; // Import the Header component

const App = () => {
  return (
    <Router>
      {/* Render the Header component on all pages */}
      <Header />
      <Switch>
        {/* Define routes for different pages */}
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/do-not-recommend" component={DoNotRecommendPage} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </Router>
  );
};

export default App;
