// src/pages/AboutPage.js
import React from 'react';
import MenuApp from '../components/Menu'

const AboutPage = () => {
  return (
    <div>
      <MenuApp />
      <div className="content">
        <h1>About Us</h1>
        <p>We are a team of professional interior designers with years of experience in transforming spaces.</p>
      </div>
    </div>
  );
};

export default AboutPage;
