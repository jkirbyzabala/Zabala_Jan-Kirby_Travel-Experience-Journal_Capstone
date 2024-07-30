// src/components/FavoritesList.js
import React from 'react';
import '../styles/FavoritesList.css'; // Import the CSS file

const FavoritesList = ({ entries }) => {
  if (!entries || entries.length === 0) {
    return <p>No favorites found.</p>;
  }

  return (
    <div className="favorites-list">
      {entries.map(entry => (
        <div key={entry._id} className="favorite-entry">
          <h3>{entry.location}</h3>
          <p>Category: {entry.category}</p>
          {entry.photoURL && (
            <div>
              <img src={entry.photoURL} alt="Favorite" style={{ width: '100px', height: 'auto' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
