// src/pages/FavoritesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoritesList from '../components/FavoritesList';
import FavoritesForm from '../components/FavoritesForm';
import '../styles/FavoritesPage.css'; // Import the CSS file

const FavoritesPage = () => {
  const [favoriteEntries, setFavoriteEntries] = useState([]);

  useEffect(() => {
    const fetchFavoriteEntries = async () => {
      try {
        const response = await axios.get('/favorites'); // Updated API endpoint
        setFavoriteEntries(response.data);
      } catch (error) {
        console.error('Error fetching favorite entries:', error);
      }
    };
    fetchFavoriteEntries();
  }, []);

  const handleAddEntry = async (entry) => {
    try {
      const response = await axios.post('/favorites', entry); // Updated API endpoint
      setFavoriteEntries([...favoriteEntries, response.data]);
    } catch (error) {
      console.error('Error adding favorite entry:', error);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <FavoritesForm onAddFavorite={handleAddEntry} />
      <FavoritesList entries={favoriteEntries} />
    </div>
  );
};

export default FavoritesPage;
