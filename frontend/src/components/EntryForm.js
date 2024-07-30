import React, { useState } from 'react';
import axios from 'axios';

const EntryForm = ({ onAddEntry }) => {
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [photo, setPhoto] = useState('');
  const [notes, setNotes] = useState('');

  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const calculatedDuration = calculateDuration(startDate, endDate);

    try {
      const response = await axios.post('http://localhost:5000/entries', {
        location,
        startDate,
        endDate,
        duration: calculatedDuration,
        photo,
        notes
      });

      onAddEntry(response.data);
      setLocation('');
      setStartDate('');
      setEndDate('');
      setPhoto('');
      setNotes('');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </label>
      <label>
        Start Date:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
      </label>
      <label>
        End Date:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
      </label>
      <label>
        Photo URL:
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
      </label>
      <label>
        Notes:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} required />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
