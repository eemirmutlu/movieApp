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

  return (
    <div className="movie-container">
      <h2>Hello {profile.nickname}, what would you like to watch today?</h2>
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => navigate(`/movies/${movie.id}`)}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default MovieList;
