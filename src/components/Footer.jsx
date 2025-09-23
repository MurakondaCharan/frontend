import React from 'react';

const Footer = () => (
  <footer style={{
    width: '100%',
    background: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '1.2rem 0',
    marginTop: 'auto',
    fontSize: '1rem',
    letterSpacing: '0.5px',
    position: 'relative',
  }}>
    © {new Date().getFullYear()} All rights reserved to LH
  </footer>
);

export default Footer; 