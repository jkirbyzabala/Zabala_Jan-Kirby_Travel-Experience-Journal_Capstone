// DoNotRecommendList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const DoNotRecommendList = () => {
  const [doNotRecommends, setDoNotRecommends] = useState([]); // State to hold the list of places not recommended

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchDoNotRecommends = async () => {
      try {
        const response = await axios.get('/api/donotrecommend'); // GET request to fetch data
        setDoNotRecommends(response.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching do not recommend items:', error);
      }
    };

    fetchDoNotRecommends();
  }, []); // Empty dependency array ensures this runs only once when component mounts

  return (
    <div>
      <h2>Do Not Recommend</h2>
      <ul>
        {doNotRecommends.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>Location: {item.location}</p>
            <p>Reason: {item.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoNotRecommendList;
