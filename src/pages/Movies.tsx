import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

const Movies: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path=":id" element={<MovieDetail />} />
        </Routes>
    );
};

export default Movies;
