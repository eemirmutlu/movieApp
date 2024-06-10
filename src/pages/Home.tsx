import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Netflix Clone</h1>
            <Link to="/signup"><button>Sign Up</button></Link>
            <Link to="/signin"><button>Sign In</button></Link>
        </div>
    );
};

export default Home;
