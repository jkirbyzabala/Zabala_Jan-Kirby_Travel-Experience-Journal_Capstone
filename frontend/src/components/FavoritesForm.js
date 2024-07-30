// src/components/FavoritesForm.js
import React, { useState } from 'react';
import '../styles/FavoritesForm.css'; // Ensure this path is correct

const FavoritesForm = ({ onAddFavorite }) => {
  const [place, setPlace] = useState('');
  const [category, setCategory] = useState('');
  const [photoURL, setPhotoURL] = useState(''); // Added for photo URL

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place && category && photoURL) { // Check all fields
      onAddFavorite({ place, category, photoURL }); // Include photo URL
      setPlace('');
      setCategory('');
      setPhotoURL(''); // Clear photo URL
    }
  };

  return (
    <form className="favorites-form" onSubmit={handleSubmit}>
      <h2>Add a Favorite</h2>
      <div className="form-group">
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="photoURL">Photo URL:</label>
        <input
          type="text"
          id="photoURL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Favorite</button>
    </form>
  );
};

export default FavoritesForm;
  