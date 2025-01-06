// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Import stylesheet

const HomePage = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <p>This is your dashboard.</p>
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default HomePage;