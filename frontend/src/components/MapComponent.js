import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure Mapbox CSS is imported

const MapComponent = ({ entries }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Use the Mapbox access token directly
  const mapboxToken = 'pk.eyJ1IjoiamtpcmJ5emFiYWxhIiwiYSI6ImNsejd3NTZ5NDBkd2syaXB1a25xbXdibGcifQ.zt2uJBXFqjbnVtAijLwJyA';

  mapboxgl.accessToken = mapboxToken;

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const addMarkers = async () => {
      for (const entry of entries) {
        try {
          const [city, state] = entry.location.split(',').map(part => part.trim());

          if (city && state) {
            const response = await axios.get(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)},${encodeURIComponent(state)}.json?access_token=${mapboxToken}`
            );

            const [longitude, latitude] = response.data.features[0]?.center || [];

            if (longitude && latitude) {
              new mapboxgl.Marker()
                .setLngLat([longitude, latitude])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${entry.title}</h3><p>${entry.description}</p>`))
                .addTo(map.current);
            } else {
              console.error(`No geocode results for: ${entry.location}`);
            }
          } else {
            console.error(`Invalid location format: ${entry.location}`);
          }
        } catch (error) {
          console.error('Error fetching geocode:', error);
        }
      }
    };

    addMarkers();
  }, [entries]);

  return (
    <div
      ref={mapContainer}
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default MapComponent;
