import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import axios from 'axios'; // Import axios for making HTTP requests

const EntryList = () => {
  const [entries, setEntries] = useState([]); // State to store the list of travel entries

  // Fetch travel entries from the server when the component mounts
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/entries'); // Correct API endpoint
        setEntries(response.data.data); // Update state with the fetched travel entries
      } catch (error) {
        console.error('Error fetching travel entries:', error);
      }
    };

    fetchEntries();
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h2>Travel Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <h3>{entry.location}</h3>
            <p>Start Date: {new Date(entry.startDate).toLocaleDateString()}</p>
            <p>End Date: {new Date(entry.endDate).toLocaleDateString()}</p>
            <p>Duration: {entry.duration} days</p>
            <img src={entry.photo} alt={entry.location} style={{ width: '100px', height: '100px' }} />
            <p>Notes: {entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
