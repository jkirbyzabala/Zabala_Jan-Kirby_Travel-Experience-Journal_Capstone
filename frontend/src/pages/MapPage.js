// MapPage.js
import React, { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import axios from 'axios';

// MapPage component displays the map and manages data fetching
const MapPage = () => {
  const [entries, setEntries] = useState([]);

  // Fetch data from the API on component mount
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('/api/entries');
        setEntries(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div>
      <h1>Map of Travel Experiences</h1>
      <MapComponent entries={entries} />
    </div>
  );
};

export default MapPage;
