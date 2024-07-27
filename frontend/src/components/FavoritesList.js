// Import necessary modules
import React from 'react'; // Import React

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      <h2>Favorites List</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((favorite, index) => (
            <li key={index}>
              <strong>Place:</strong> {favorite.place} <br />
              <strong>Category:</strong> {favorite.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
