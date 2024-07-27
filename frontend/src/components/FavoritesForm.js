// Import necessary modules
import React, { useState } from 'react'; // Import React and useState hook

const FavoritesForm = ({ onAddFavorite }) => {
  // Define state variables for the form inputs
  const [place, setPlace] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (place && category) {
      // Call the parent component's function to add a new favorite
      onAddFavorite({ place, category });
      // Clear form inputs
      setPlace('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Favorite</h2>
      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Favorite</button>
    </form>
  );
};

export default FavoritesForm;
