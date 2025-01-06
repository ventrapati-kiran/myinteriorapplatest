// src/pages/ContactPage.js
import React from 'react';
import MenuApp from '../components/Menu';

const ContactPage = () => {
  return (
    <div>
      <MenuApp />
      <div className="content">
        <h1>Contact Us</h1>
        <p>Have any questions or want to get in touch? Reach out to us!</p>
        {/* Add contact form or contact details here */}
      </div>
    </div>
  );
};

export default ContactPage;