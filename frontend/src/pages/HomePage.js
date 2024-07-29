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
       await axios.get('http://localhost:5000/entries').then((response)=>{
        console.log(response)
          setEntries(response.data.data);
        });
        
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
            {entry.photo && (
              <div>
                <img src={entry.photo} style={{ width: '100%' }} />
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
