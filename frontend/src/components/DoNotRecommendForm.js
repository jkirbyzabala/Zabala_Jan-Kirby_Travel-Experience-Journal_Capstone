// src/components/DoNotRecommendForm.js

import React, { useState } from 'react';
import axios from 'axios';

// DoNotRecommendForm component allows users to add new "do not recommend" entries
const DoNotRecommendForm = ({ onAddEntry }) => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    reason: ''
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the API with form data
      await axios.post('/api/donotrecommend', formData);
      // Notify parent component of the new entry
      onAddEntry(formData);
      // Clear the form inputs
      setFormData({
        name: '',
        reason: ''
      });
    } catch (error) {
      console.error('Error adding do not recommend entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="reason">Reason:</label>
        <textarea
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default DoNotRecommendForm;
