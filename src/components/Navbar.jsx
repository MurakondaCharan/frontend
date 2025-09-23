import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/login" className="navbar-btn login-btn">Login</Link>
        <Link to="/signup" className="navbar-btn signup-btn">Sign Up</Link>
      </div>
      <div className="navbar-center">
        <span className="navbar-logo">LEARNING HUB</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/courses" className="navbar-link">Courses</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar; 