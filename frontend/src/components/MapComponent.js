// MapComponent.js
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// MapComponent is a React component that displays a Mapbox map
const MapComponent = ({ entries }) => {
  // Create a reference for the map container
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Mapbox access token
  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

  // Initialize the map when the component mounts
  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0], // Initial map center
      zoom: 2, // Initial zoom level
    });

    // Add navigation controls to the map
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each entry
    entries.forEach(entry => {
      new mapboxgl.Marker()
        .setLngLat([entry.longitude, entry.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${entry.title}</h3><p>${entry.description}</p>`))
        .addTo(map.current);
    });
  }, [entries]);

  return (
    <div
      ref={mapContainer}
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default MapComponent;
