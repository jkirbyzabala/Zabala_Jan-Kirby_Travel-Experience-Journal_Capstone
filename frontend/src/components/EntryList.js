import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import axios from 'axios'; // Import axios for making HTTP requests

const EntryList = () => {
  const [entries, setEntries] = useState([]); // State to store the list of entries

  // Fetch entries from the server when the component mounts
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('/api/entries');
        setEntries(response.data); // Update state with the fetched entries
      } catch (error) {
        console.error('Error fetching entries:', error);
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
            <h3>{entry.title}</h3>
            <p>Location: {entry.location}</p>
            <p>Date: {new Date(entry.date).toLocaleDateString()}</p>
            <img src={entry.photo} alt={entry.title} style={{ width: '100px', height: '100px' }} />
            <p>{entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
