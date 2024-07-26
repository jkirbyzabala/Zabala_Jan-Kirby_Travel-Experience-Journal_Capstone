// DoNotRecommendPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoNotRecommendList from '../components/DoNotRecommendList';
import DoNotRecommendForm from '../components/DoNotRecommendForm';

// DoNotRecommendPage is a page component for managing "do not recommend" entries
const DoNotRecommendPage = () => {
  // State to store do not recommend entries
  const [doNotRecommendEntries, setDoNotRecommendEntries] = useState([]);

  // Fetch do not recommend entries from the API
  useEffect(() => {
    const fetchDoNotRecommendEntries = async () => {
      try {
        const response = await axios.get('/api/donotrecommend');
        setDoNotRecommendEntries(response.data);
      } catch (error) {
        console.error('Error fetching do not recommend entries:', error);
      }
    };
    fetchDoNotRecommendEntries();
  }, []);

  // Function to handle adding a new entry
  const handleAddEntry = async (entry) => {
    try {
      const response = await axios.post('/api/donotrecommend', entry);
      setDoNotRecommendEntries([...doNotRecommendEntries, response.data]);
    } catch (error) {
      console.error('Error adding do not recommend entry:', error);
    }
  };

  return (
    <div>
      <h1>Do Not Recommend</h1>
      <DoNotRecommendForm onAddEntry={handleAddEntry} />
      <DoNotRecommendList entries={doNotRecommendEntries} />
    </div>
  );
};

export default DoNotRecommendPage;
