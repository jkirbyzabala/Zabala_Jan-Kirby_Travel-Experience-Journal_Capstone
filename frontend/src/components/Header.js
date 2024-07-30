import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure the path is correct

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/do-not-recommend">Would Not Repeat</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
        <Link to="/create-entry" className="create-entry">Create New Travel Entry</Link>
      </nav>
    </header>
  );
};

export default Header;
