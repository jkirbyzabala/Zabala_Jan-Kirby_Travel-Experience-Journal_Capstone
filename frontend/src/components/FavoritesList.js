import React from 'react';

// FavoritesList component to display a list of favorite entries
const FavoritesList = ({ entries }) => {
  return (
    <div className="favorites-list">
      {entries.length > 0 ? (
        entries.map((entry) => (
          <div key={entry._id} className="favorite-entry">
            <h3>{entry.place}</h3>
            <p>Category: {entry.category}</p>
            {entry.photoUrl && <img src={entry.photoUrl} alt="Favorite" style={{ width: '100px', height: '100px' }} />}
          </div>
        ))
      ) : (
        <p>No favorite entries found.</p>
      )}
    </div>
  );
};

export default FavoritesList;
