import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

// Skeleton component for loading effect
const SkeletonLoading: React.FC = () => {
  return (
    <div className="skeleton-loading">
      <div className="skeleton-button"></div>
      <div className="skeleton-button"></div>
    </div>
  );
};

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading effect with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second (simulating data loading)
    }, 1000);

    return () => clearTimeout(timer); // Cleanup function to clear timeout
  }, []);

  return (
    <div className='Home'>
      <h1 className='home-text'>Welcome to Movie App</h1>
      {loading ? (
        <SkeletonLoading /> // Show skeleton loading while content is loading
      ) : (
        <>
          <Link to="/signup"><button className='signup'>Sign Up</button></Link>
          <Link to="/signin"><button className='signin'>Sign In</button></Link>
        </>
      )}
    </div>
  );
};

export default Home;
