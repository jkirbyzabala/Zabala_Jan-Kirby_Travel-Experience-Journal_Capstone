import React, { useState } from 'react'; // Import React and useState hook for managing form state
import axios from 'axios'; // Import axios for making HTTP requests

const EntryForm = ({ onAddEntry }) => {
  const [location, setLocation] = useState(''); // State for entry location
  const [startDate, setStartDate] = useState(''); // State for entry start date
  const [endDate, setEndDate] = useState(''); // State for entry end date
  const [photo, setPhoto] = useState(''); // State for entry photo URL
  const [notes, setNotes] = useState(''); // State for entry notes

  // Calculate duration based on start and end dates
  const calculateDuration = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    return Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Duration in days
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const calculatedDuration = calculateDuration(startDate, endDate);

    try {
      const response = await axios.post('http://localhost:5000/entries', { // Correct URL
        location,
        startDate,
        endDate,
        duration: calculatedDuration,
        photo,
        notes
      });

      onAddEntry(response.data); // Call the parent callback with the new entry data
      // Clear form inputs
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

