import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React, including components, state, and props.', image: '/WhatsApp Image 2025-05-11 at 06.03.03_a0b47546.jpg', theory: 'React is a JavaScript library for building user interfaces. It uses components, state, and props to create interactive UIs.', video: 'Ke90Tje7VS0' },
  { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into ES6+, async programming, and advanced JS concepts.', image: '/WhatsApp Image 2025-05-11 at 06.03.03_c97244fd.jpg', theory: 'Advanced JavaScript covers closures, promises, async/await, and ES6+ features for modern web development.', video: 'PkZNo7MFNFg' },
  { id: 3, title: 'UI/UX Design Fundamentals', description: 'Understand the principles of UI/UX and how to design user-friendly interfaces.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_0aa9d30e.jpg', theory: 'UI/UX design focuses on usability, accessibility, and aesthetics to create effective digital products.', video: '3Y1MvF6WfOc' },
  { id: 4, title: 'Backend with Node.js', description: 'Build scalable backend applications using Node.js and Express.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_5c6cf44d.jpg', theory: 'Node.js allows you to run JavaScript on the server. Express is a popular framework for building APIs.', video: 'Oe421EPjeBE' },
  { id: 5, title: 'Python for Everybody', description: 'Start your programming journey with Python.', image: '/WhatsApp Image 2025-05-11 at 06.03.04_d45c89f8.jpg', theory: 'Python is a versatile, beginner-friendly programming language used in web, data science, and automation.', video: 'rfscVS0vtbw' },
  { id: 6, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_4cadc645.jpg', theory: 'Machine learning enables computers to learn from data and make predictions or decisions.', video: 'GwIo3gDZCVQ' },
  { id: 7, title: 'Data Structures & Algorithms', description: 'Master the basics of data structures and algorithms.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_60796eb1.jpg', theory: 'Data structures organize data efficiently. Algorithms are step-by-step procedures for solving problems.', video: '8hly31xKli0' },
  { id: 8, title: 'HTML & CSS Bootcamp', description: 'Learn to build beautiful websites with HTML and CSS.', image: '/WhatsApp Image 2025-05-11 at 06.03.05_b658247e.jpg', theory: 'HTML structures web content, while CSS styles and layouts it for visual appeal.', video: 'UB1O30fR-EE' },
  { id: 9, title: 'Database Design', description: 'Learn relational database design and SQL.', image: '/WhatsApp Image 2025-05-11 at 06.03.06_1f552edf.jpg', theory: 'Database design involves structuring data for efficiency and integrity. SQL is used to manage relational databases.', video: 'ztHopE5Wnpc' },
  { id: 10, title: 'DevOps Essentials', description: 'Get started with DevOps tools and practices.', image: '/WhatsApp Image 2025-05-11 at 06.03.06_51b2c984.jpg', theory: 'DevOps combines development and operations to automate and improve software delivery.', video: '0yWAtQ6wYNM' },
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div style={{ padding: '2rem' }}><h2>Course not found</h2><Link to="/courses">Back to Courses</Link></div>;
  }

  return (
    <div className="course-detail" style={{ padding: '2rem', maxWidth: 700, margin: '2rem auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }}>
      <img src={course.image} alt={course.title} style={{ width: '100%', maxWidth: 320, borderRadius: 8, marginBottom: 24 }} />
      <h2>{course.title}</h2>
      <p style={{ fontSize: '1.1rem', color: '#444' }}>{course.description}</p>
      <div style={{ margin: '2rem 0', color: '#222' }}>
        <h3>Theory</h3>
        <p>{course.theory}</p>
      </div>
      <div style={{ margin: '2rem 0' }}>
        <h3>Video Lesson</h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8 }}>
          <iframe
            src={`https://www.youtube.com/embed/${course.video}`}
            title={course.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </div>
      <Link to="/courses" style={{ color: '#43b04a', fontWeight: 600 }}>← Back to Courses</Link>
    </div>
  );
};

export default CourseDetail; 