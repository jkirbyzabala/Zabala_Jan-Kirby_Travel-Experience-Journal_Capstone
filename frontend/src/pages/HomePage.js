import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditEntryForm from './EditEntryForm';
import '../styles/HomePage.css';

const HomePage = () => {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [editingEntry, setEditingEntry] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // To keep track of the current entry index

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
      // Update the current index if needed
      setCurrentIndex(prevIndex => (prevIndex >= entries.length - 1 ? entries.length - 2 : prevIndex));
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

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % entries.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + entries.length) % entries.length);
  };

  if (error) return <div>{error}</div>;

  const currentEntry = entries[currentIndex];

  return (
    <div className="container">
      {editingEntry ? (
        <EditEntryForm entry={editingEntry} onUpdate={handleUpdate} onCancel={handleCancelEdit} />
      ) : (
        entries.length > 0 ? (
          <div className="carousel">
            <button className="nav-button left" onClick={handlePrevious}>◀</button>
            <div className="entry-item">
              <h2>{currentEntry.location}</h2>
              {currentEntry.photo && (
                <div>
                  <img src={currentEntry.photo} alt="Entry" className="entry-photo" />
                </div>
              )}
              <p>{currentEntry.notes}</p>
              <p>{new Date(currentEntry.startDate).toLocaleDateString()} - {new Date(currentEntry.endDate).toLocaleDateString()}</p>
              <p>Duration: {currentEntry.duration} days</p>
              <button onClick={() => handleDelete(currentEntry._id)} className="entry-button">Delete</button>
              <button onClick={() => handleEdit(currentEntry)} className="entry-button">Edit</button>
            </div>
            <button className="nav-button right" onClick={handleNext}>▶</button>
          </div>
        ) : (
          <p>No entries found.</p>
        )
      )}
    </div>
  );
};

export default HomePage;
