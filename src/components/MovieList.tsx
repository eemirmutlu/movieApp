import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/MovieList.css';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Profile {
  nickname: string;
  profilePic: string;
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { profile } = location.state as { profile: Profile };

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=6e76033a8f0b1a1830a64fb16e4c4a29')
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };


  return (
    <div>
      <div className='movie-top'>
        <div className="button-div">
          <button onClick={() => navigate(-1)}>Back</button>
          <button onClick={handleSignOut} className="signout-button">
            Sign Out
          </button>
        </div>
        <h2>Hello {profile.nickname}, what would you like to watch today?</h2>
      </div>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item" onClick={() => navigate(`/movies/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;