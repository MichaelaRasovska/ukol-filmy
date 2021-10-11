import React from 'react';
import { Movie } from '../Movie/index.jsx';
import './style.css';

export const MovieList = (props) => (
  <>
    <div className="movie-list">
      {props.movies.map((film) => (
        <Movie
          title={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          key={film.title}
          cast={film.cast}
        />
      ))}
    </div>
  </>
);
