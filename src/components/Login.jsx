import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
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
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData, {
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setSuccess('Login successful!');
        setFormData({ email: '', password: '' });
        setTimeout(() => {
          navigate('/');
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Login failed. Please check your credentials.');
      } else {
        setError('Network error. Please check your connection.');
      }
    }
  };

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: 350 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: '#e74c3c', marginBottom: 12 }}>{error}</div>}
          {success && <div style={{ color: '#43b04a', marginBottom: 12 }}>{success}</div>}
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
              placeholder="Enter your password"
              style={{ width: '100%', padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', background: '#43b04a', color: '#fff', border: 'none', borderRadius: 6, padding: '0.9rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', marginBottom: 10 }}>Login</button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 10 }}>
          Don&apos;t have an account?{' '}
          <Link to="/signup" style={{ color: '#43b04a', fontWeight: 600 }}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login; 