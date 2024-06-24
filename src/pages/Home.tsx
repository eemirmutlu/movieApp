import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home: React.FC = () => {
    return (
        <div className='Home'>
            <h1 className='home-text'>Welcome to Movie App</h1>
            <Link to="/signup"><button className='signup'>Sign Up</button></Link>
            <Link to="/signin"><button className='signin'>Sign In</button></Link>
        </div>
    );
};

export default Home;
