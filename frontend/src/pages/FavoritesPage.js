import React, { useState } from 'react';
import '../styles/FavoritesPage.css';
import FavoritesForm from '../components/FavoritesForm'; // Import the FavoritesForm component

const FavoritesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hardcoded list of images
  const photos = [
    '/favoritesimgs/IMG_0785.JPG',
    '/favoritesimgs/IMG_8480.jpg',
    '/favoritesimgs/Iceland.jpg'
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <div className="carousel-section">
        <h2 className="carousel-title">Favorite Hikes</h2>
        <div className="carousel-container">
          <button className="carousel-button" onClick={handlePrev}>Prev</button>
          <div className="carousel-slide">
            <img src={photos[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <button className="carousel-button" onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="favorites-form-container">
        <FavoritesForm onAddFavorite={() => {}} /> {/* Replace with appropriate function or prop */}
      </div>
    </div>
  );
};

export default FavoritesPage;
