import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditEntryForm = ({ entry, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    location: '',
    startDate: '',
    endDate: '',
    duration: '',
    photo: '',
    notes: '',
  });

  useEffect(() => {
    if (entry) {
      setFormData({
        location: entry.location,
        startDate: entry.startDate,
        endDate: entry.endDate,
        duration: entry.duration,
        photo: entry.photo,
        notes: entry.notes,
      });
    }
  }, [entry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/entries/${entry._id}`, formData);
      onUpdate();
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Entry</h2>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} />
      </label>
      <label>
        Start Date:
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
      </label>
      <label>
        Duration:
        <input type="number" name="duration" value={formData.duration} onChange={handleChange} />
      </label>
      <label>
        Photo URL:
        <input type="text" name="photo" value={formData.photo} onChange={handleChange} />
      </label>
      <label>
        Notes:
        <textarea name="notes" value={formData.notes} onChange={handleChange} />
      </label>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditEntryForm;
