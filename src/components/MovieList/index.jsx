import React from 'react';
import movies from '../../movies.js';
import { Movie } from '../Movie/index.jsx';
import './style.css';

export const MovieList = () => (
  <>
    <div className="movie-list">
      {movies.map((film) => (
        <Movie
          title={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          key={film.title}
        />
      ))}
    </div>
  </>
);
