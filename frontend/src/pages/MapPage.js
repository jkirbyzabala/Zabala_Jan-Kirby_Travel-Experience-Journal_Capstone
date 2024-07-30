import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import '../styles/MapPage.css'; // Make sure this file exists and styles the map as needed

// Use the Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiamtpcmJ5emFiYWxhIiwiYSI6ImNsejd3NTZ5NDBkd2syaXB1a25xbXdibGcifQ.zt2uJBXFqjbnVtAijLwJyA';

const MapPage = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [entries, setEntries] = useState([]);
  
  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current, // Container ID
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: [-74.5, 40], // Initial map center [lng, lat]
      zoom: 9, // Initial zoom level
    });

    // Add navigation control (zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Fetch entries and add markers
    const fetchEntries = async () => {
      try {
        const response = await axios.get('http://localhost:5000/entries');
        setEntries(response.data.data);

        // Convert location to coordinates and add markers
        for (const entry of response.data.data) {
          // Split location into city and state
          const [city, state] = entry.location.split(',').map(part => part.trim());

          // Geocode city and state
          const geocodeResponse = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)},${encodeURIComponent(state)}.json?access_token=${mapboxgl.accessToken}`
          );
          
          if (geocodeResponse.data.features.length > 0) {
            const [longitude, latitude] = geocodeResponse.data.features[0].center;

            new mapboxgl.Marker()
              .setLngLat([longitude, latitude])
              .setPopup(new mapboxgl.Popup().setText(entry.location))
              .addTo(map.current);
          } else {
            console.error(`No geocode results for: ${entry.location}`);
          }
        }
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    };

    fetchEntries();
  }, []);

  return (
    <div className="map-container" ref={mapContainer} style={{ height: '100vh' }} />
  );
};

export default MapPage;
