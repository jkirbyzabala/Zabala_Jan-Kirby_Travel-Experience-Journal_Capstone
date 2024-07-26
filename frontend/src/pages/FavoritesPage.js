// FavoritesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoritesList from '../components/FavoritesList';
import FavoritesForm from '../components/FavoritesForm';

// FavoritesPage is a page component for managing favorite entries
const FavoritesPage = () => {
  // State to store favorite entries
  const [favoriteEntries, setFavoriteEntries] = useState([]);

  // Fetch favorite entries from the API
  useEffect(() => {
    const fetchFavoriteEntries = async () => {
      try {
        const response = await axios.get('/api/favorites');
        setFavoriteEntries(response.data);
      } catch (error) {
        console.error('Error fetching favorite entries:', error);
      }
    };
    fetchFavoriteEntries();
  }, []);

  // Function to handle adding a new favorite entry
  const handleAddEntry = async (entry) => {
    try {
      const response = await axios.post('/api/favorites', entry);
      setFavoriteEntries([...favoriteEntries, response.data]);
    } catch (error) {
      console.error('Error adding favorite entry:', error);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>
      <FavoritesForm onAddEntry={handleAddEntry} />
      <FavoritesList entries={favoriteEntries} />
    </div>
  );
};

export default FavoritesPage;
