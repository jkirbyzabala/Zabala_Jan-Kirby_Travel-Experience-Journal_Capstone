import React from 'react'; // Import React
import axios from 'axios'; // Import axios for making HTTP requests

const EntryList = ({ entries, onDeleteEntry }) => {
  // Function to handle deleting an entry
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/entries/${id}`); // Make DELETE request to the server
      onDeleteEntry(id); // Notify parent component about the deletion
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };

  return (
    <div>
      <h2>Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry._id}>
            <h3>{entry.title}</h3>
            <p>{entry.location}</p>
            <button onClick={() => handleDelete(entry._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EntryList;
