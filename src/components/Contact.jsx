import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.07)', padding: '2rem' }}>
      <h2>Contact Us</h2>
      <p>Have questions or feedback? Reach out to us using the form below or email us at <a href="mailto:support@learninghub.com">support@learninghub.com</a>.</p>
      {submitted ? (
        <div style={{ color: '#43b04a', fontWeight: 600, margin: '2rem 0' }}>Thank you for contacting us! We will get back to you soon.</div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginTop: '1.5rem' }}>
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required style={{ padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }} />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required style={{ padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }} />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={5} style={{ padding: '0.8rem', borderRadius: 6, border: '1px solid #ccc' }} />
          <button type="submit" style={{ background: '#43b04a', color: '#fff', border: 'none', borderRadius: 6, padding: '0.9rem', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer' }}>Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact; 