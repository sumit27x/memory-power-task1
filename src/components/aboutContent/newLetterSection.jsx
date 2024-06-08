import React, { useState } from 'react';
import './about.css';

const NewsLetterSection = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetterSection;
