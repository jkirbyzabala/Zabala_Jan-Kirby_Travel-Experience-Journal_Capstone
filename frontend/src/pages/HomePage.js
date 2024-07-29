// frontend/src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HomePage.css';

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/entries');
        setEntries(response.data);
      } catch (error) {
        setError('There was an error fetching the entries!');
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  if (error) return <div>{error}</div>;

  return (
    <div>
      {entries.length > 0 ? (
        entries.map(entry => (
          <div key={entry._id}>
            <h2>{entry.location}</h2>
            {entry.photos && entry.photos.length > 0 && (
              <div>
                {entry.photos.map((photoUrl, index) => (
                  <img key={index} src={photoUrl} alt={`Photo ${index + 1}`} style={{ width: '100%' }} />
                ))}
              </div>
            )}
            <p>{entry.notes}</p>
            <p>{new Date(entry.startDate).toLocaleDateString()} - {new Date(entry.endDate).toLocaleDateString()}</p>
            <p>Duration: {entry.duration} days</p>
          </div>
        ))
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  );
};

export default HomePage;
