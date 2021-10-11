import React from 'react';
import './style.css';

export const Actor = (props) => (
  <>
    <div className="actor">
      {props.name} <div className="role"> v roli {props.as}</div>
    </div>
  </>
);
