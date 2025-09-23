import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Basic validation
    if (!formData.username.trim()) {
      setError('Username is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!formData.password.trim()) {
      setError('Password is required');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.data) {
        setSuccess(response.data.message || 'Registration successful! You can now login.');
        setFormData({ username: '', email: '', password: '' });
        setTimeout(() => {
          navigate('/login');
        }, 1200);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data || 'Registration failed. Please try again.');
      } else if (err.request) {
        setError('No response from server. Please check if the server is running.');
      } else {
        setError('Error: ' + err.message);
      }
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: 350 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: '#e74c3c', marginBottom: 12 }}>{error}</div>}
          {success && <div style={{ color: '#43b04a', marginBottom: 12 }}>{success}</div>}
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="username" style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              minLength={3}
              placeholder="Enter your username"
              style={{ width: '100%', padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="email" style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              style={{ width: '100%', padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: 18 }}>
            <label htmlFor="password" style={{ fontWeight: 500, marginBottom: 6, display: 'block' }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              placeholder="Enter your password"
              style={{ width: '100%', padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', background: '#43b04a', color: '#fff', border: 'none', borderRadius: 6, padding: '0.9rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', marginBottom: 10 }}>Register</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#43b04a', fontWeight: 600 }}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup; 