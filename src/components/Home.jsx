import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Empower Your Learning Journey</h1>
        <p>Explore a world of knowledge with our expertly crafted courses to enhance your skills and achieve your goals.</p>
        <div className="hero-buttons">
          <button className="hero-btn">Get Started</button>
          <Link to="/courses" className="hero-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>Explore Courses</Link>
        </div>
      </div>
      <div className="featured-section">
        <h2>Featured Courses</h2>
        <p>Explore some of our most popular courses designed to help you excel.</p>
        {/* Add course cards here if needed */}
      </div>
    </div>
  );
};

export default Home; 