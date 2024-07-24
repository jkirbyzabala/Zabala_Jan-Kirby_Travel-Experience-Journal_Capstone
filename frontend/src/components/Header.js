// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <h1>Travel Diary</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/do-not-recommend">Do Not Recommend</Link></li>
                    <li><Link to="/map">Map</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
