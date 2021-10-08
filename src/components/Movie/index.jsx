import React from 'react';
import './style.css';

export const Movie = (props) => (
  <>
    <div className="container">
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="year">Rok: {props.year}</div>
        <div className="rating">Hodnocení: {props.rating}</div>
        <div className="director">Režisér: {props.director}</div>
        <div className="genre">Žánr:{props.genre}</div>
      </div>
      <div className="poster">
        <img src={`../../assets/${props.poster}`}></img>
      </div>
    </div>
  </>
);
