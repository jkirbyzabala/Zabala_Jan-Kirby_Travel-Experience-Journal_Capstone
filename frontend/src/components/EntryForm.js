import React, { useState } from 'react'; // Import React and useState hook for managing form state
import axios from 'axios'; // Import axios for making HTTP requests

const EntryForm = ({ onAddEntry }) => {
  const [title, setTitle] = useState(''); // State for entry title
  const [location, setLocation] = useState(''); // State for entry location
  const [date, setDate] = useState(''); // State for entry date
  const [photo, setPhoto] = useState(''); // State for entry photo URL
  const [notes, setNotes] = useState(''); // State for entry notes

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await axios.post('/api/entries', {
        title,
        location,
        date,
        photo,
        notes
      });
      onAddEntry(response.data); // Call the parent callback with the new entry data
      setTitle('');
      setLocation('');
      setDate('');
      setPhoto('');
      setNotes('');
    } catch (error) {
      console.error('Error adding entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Photo URL:
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <label>
        Notes:
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
