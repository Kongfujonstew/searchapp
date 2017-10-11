import React from 'react';
import { render } from 'react-dom';

export default (props) => {
  const { name, surname, location } = props.person;
  return (
    <div>
      <h3>{name} {surname}</h3>
      <p><div />{location}</p>
    </div>
  );
};

