import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/EntryFormPage.css';

const EntryFormPage = () => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [duration, setDuration] = useState('');
  const [photo, setPhoto] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { location, startDate, endDate, duration, photo, notes };
    try {
      await axios.post('http://localhost:5000/entries', newEntry);
      navigate('/');
    } catch (error) {
      console.error('Error creating new entry:', error);
    }
  };

  return (
    <div className="entry-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Create New Entry</h2>
        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
        <label>Duration</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <label>Photo URL</label>
        <input
          type="url"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EntryFormPage;
