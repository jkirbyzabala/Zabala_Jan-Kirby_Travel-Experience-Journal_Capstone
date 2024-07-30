import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditEntryForm from './EditEntryForm'; // Import the EditEntryForm component
import '../styles/HomePage.css';

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/entries');
        setEntries(response.data.data);
      } catch (error) {
        setError('There was an error fetching the entries!');
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/entries/${id}`);
      setEntries(entries.filter(entry => entry._id !== id));
    } catch (error) {
      setError('There was an error deleting the entry!');
      console.error('Error deleting entry:', error);
    }
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.get('http://localhost:5000/entries');
      setEntries(response.data.data);
      setEditingEntry(null);
    } catch (error) {
      setError('There was an error updating the entry!');
      console.error('Error updating entry:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingEntry(null);
  };

  if (error) return <div>{error}</div>;

  return (
    <div>
      {editingEntry ? (
        <EditEntryForm entry={editingEntry} onUpdate={handleUpdate} onCancel={handleCancelEdit} />
      ) : (
        entries.length > 0 ? (
          entries.map(entry => (
            <div key={entry._id}>
              <h2>{entry.location}</h2>
              {entry.photo && (
                <div>
                  <img src={entry.photo} style={{ width: '100%' }} alt="Entry" />
                </div>
              )}
              <p>{entry.notes}</p>
              <p>{new Date(entry.startDate).toLocaleDateString()} - {new Date(entry.endDate).toLocaleDateString()}</p>
              <p>Duration: {entry.duration} days</p>
              <button onClick={() => handleDelete(entry._id)}>Delete</button>
              <button onClick={() => handleEdit(entry)}>Edit</button> {/* Edit button */}
            </div>
          ))
        ) : (
          <p>No entries found.</p>
        )
      )}
    </div>
  );
};

export default HomePage;
