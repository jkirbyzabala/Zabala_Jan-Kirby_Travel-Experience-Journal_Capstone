import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState
import axios from 'axios'; // Import axios for making HTTP requests

const DoNotRecommendList = () => {
  const [doNotRecommends, setDoNotRecommends] = useState([]); // State to store the list of places to avoid

  // Fetch places to avoid from the server when the component mounts
  useEffect(() => {
    const fetchDoNotRecommends = async () => {
      try {
        const response = await axios.get('/api/donotrecommend');
        setDoNotRecommends(response.data); // Update state with the fetched places to avoid
      } catch (error) {
        console.error('Error fetching places to avoid:', error);
      }
    };

    fetchDoNotRecommends();
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h2>Do Not Recommend</h2>
      <ul>
        {doNotRecommends.map((place) => (
          <li key={place._id}>
            <h3>{place.name}</h3>
            <p>Location: {place.location}</p>
            <p>Date: {new Date(place.date).toLocaleDateString()}</p>
            <img src={place.photo} alt={place.name} style={{ width: '100px', height: '100px' }} />
            <p>Reason: {place.reason}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoNotRecommendList;
