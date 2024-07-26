import React, { useState } from 'react'; // Import React and useState for component state management
import MapComponent from '../components/MapComponent'; // Import the MapComponent to display the map

const MapPage = () => {
  // State to manage map-related data
  const [entries, setEntries] = useState([]);

  return (
    <div>
      <h1>Travel Map</h1>
      <p>View your travel entries on the map and explore your journey.</p>
      <MapComponent entries={entries} />
      {/* MapComponent will handle displaying entries on the map */}
    </div>
  );
};

export default MapPage;
