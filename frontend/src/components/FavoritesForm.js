import React, { useState } from 'react';
import '../styles/FavoritesForm.css'; // Import the CSS for styling

const FavoritesForm = ({ onAddFavorite }) => {
  const [place, setPlace] = useState('');
  const [category, setCategory] = useState('');
  const [photoURL, setPhotoURL] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place && category && photoURL) {
      onAddFavorite({ place, category, photoURL });
      setPlace('');
      setCategory('');
      setPhotoURL('');
    }
  };

  return (
    <div className="favorites-form-container">
      <h2>Add a Favorite</h2>
      <form onSubmit={handleSubmit} className="favorites-form">
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
    </div>
  );
};

export default FavoritesForm;
