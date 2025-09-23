import React from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React, including components, state, and props.', image: '/WhatsApp Image 2025-05-11 at 06.03.03_a0b47546.jpg' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into ES6+, async programming, and advanced JS concepts.', image: '/WhatsApp Image 2025-05-11 at 06.03.03_c97244fd.jpg' },
  { id: 3, title: 'UI/UX Design Fundamentals', description: 'Understand the principles of UI/UX and how to design user-friendly interfaces.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_0aa9d30e.jpg' },
  { id: 4, title: 'Backend with Node.js', description: 'Build scalable backend applications using Node.js and Express.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_5c6cf44d.jpg' },
  { id: 5, title: 'Python for Everybody', description: 'Start your programming journey with Python.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_d45c89f8.jpg' },
  { id: 6, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_4cadc645.jpg' },
  { id: 7, title: 'Data Structures & Algorithms', description: 'Master the basics of data structures and algorithms.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_60796eb1.jpg' },
  { id: 8, title: 'HTML & CSS Bootcamp', description: 'Learn to build beautiful websites with HTML and CSS.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_b658247e.jpg' },
  { id: 9, title: 'Database Design', description: 'Learn relational database design and SQL.', image: '/WhatsApp Image 2025-05-11 at 06.03.06_1f552edf.jpg' },
  { id: 10, title: 'DevOps Essentials', description: 'Get started with DevOps tools and practices.', image: '/WhatsApp Image 2025-05-11 at 06.03.06_51b2c984.jpg' },
];

const Courses = () => {
  return (
    <div className="courses-page">
      <h2>Our Courses</h2>
      <div className="courses-list">
        {courses.map(course => (
          <Link to={`/courses/${course.id}`} className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-image" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses; 