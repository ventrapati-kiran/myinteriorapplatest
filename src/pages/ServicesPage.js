// src/pages/ServicesPage.js
import React from 'react';
import Menu from '../components/Menu';

const ServicesPage = () => {
  return (
    <div>
      <Menu />
      <div className="content">
        <h1>Our Services</h1>
        <ul>
          <li>Interior Design Consultation</li>
          <li>Home Staging</li>
          <li>Furniture Selection</li>
          <li>3D Rendering</li>
          <li>Space Planning</li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesPage;
