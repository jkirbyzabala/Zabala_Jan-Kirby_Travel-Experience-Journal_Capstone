import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DoNotRecommendPage from './pages/DoNotRecommendPage';
import MapPage from './pages/MapPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/do-not-recommend" component={DoNotRecommendPage} />
        <Route path="/map" component={MapPage} />
      </Switch>
    </Router>
  );
};

export default App;
