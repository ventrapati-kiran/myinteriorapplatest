// src/pages/HomePage.js
import React from 'react';
import Menu from '../components/Menu';
import '../styles/HomePage.css'

const HomePage = () => {
  return (
    <><div>
      <Menu />

    </div><div className="home-container">

        <h1>Welcome to ARR Interior Company</h1>
        <p>Transform your space with our professional interior design services.</p>

      </div></>
  );
};

export default HomePage;
