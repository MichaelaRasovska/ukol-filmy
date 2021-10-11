import React from 'react';
import './style.css';
import { Actor } from '../Actor';

export const Movie = (props) => (
  <>
    <div className="container">
      <div className="info-container">
        <div className="info">
          <div className="title">{props.title}</div>
          <div className="year ">
            <strong>Rok: </strong> {props.year}
          </div>
          <div className="rating ">
            <strong>Hodnocení: </strong>
            {props.rating}
          </div>
          <div className="director ">
            <strong>Režisér: </strong>
            {props.director}
          </div>
          <div className="genre ">
            <strong>Žánr: </strong>
            {props.genre}
          </div>
        </div>
        <div>
          <img className="poster" src={`../../assets/${props.poster}`}></img>
        </div>
      </div>
      <div className="actors">
        <div className="title">V hlavních rolích:</div>
        <div>
          {props.cast.map((actor) => (
            <Actor key={actor.name} name={actor.name} as={actor.as} />
          ))}
        </div>
      </div>
    </div>
  </>
);
