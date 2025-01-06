// src/pages/PortfolioPage.js
import React from 'react';
import Menu from '../components/Menu';

const PortfolioPage = () => {
  return (
    <div>
      <Menu />
      <div className="content">
        <h1>Our Portfolio</h1>
        <p>Take a look at some of our completed projects.</p>
        {/* Add images or project details here */}
      </div>
    </div>
  );
};

export default PortfolioPage;
