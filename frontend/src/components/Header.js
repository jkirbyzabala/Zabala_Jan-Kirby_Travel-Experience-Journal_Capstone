import React from 'react'; // Import React for building components
import { Link } from 'react-router-dom'; // Import Link for navigation

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Navigation link to Home page */}
          <li><Link to="/favorites">Favorites</Link></li> {/* Navigation link to Favorites page */}
          <li><Link to="/do-not-recommend">Do Not Recommend</Link></li> {/* Navigation link to Do Not Recommend page */}
          <li><Link to="/map">Map</Link></li> {/* Navigation link to Map page */}
          <li><Link to="/create-entry">Create Entry</Link></li> {/* Navigation link to Create Entry page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
