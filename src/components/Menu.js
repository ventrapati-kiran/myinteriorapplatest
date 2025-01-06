// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';  // Import the CSS file for styles

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;